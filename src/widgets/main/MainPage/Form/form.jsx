import React, { useState } from "react";
import "./form.css";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { FaChevronDown, FaChevronUp, FaSpinner } from "react-icons/fa";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedRole, setSelectedRole] = useState("Я ученик");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Advanced");
  const [optionDropdownOpen, setOptionDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!name.trim()) {
      setNameError(true);
      valid = false;
    }
    if (!phone.trim()) {
      setPhoneError(true);
      valid = false;
    }

    if (!valid) {
      setModalMessage("Пожалуйста, заполните все поля.");
      setShowModal(true);
      return;
    }

    const data = {
      name,
      phone,
      role: selectedRole,
      level: selectedOption
    };

    setIsLoading(true);
    try {
      await fetch("https://google-sheets.baybutaevfarrux.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      setModalMessage("Форма успешно отправлена!");
      setShowModal(true);

      setName("");
      setPhone("");
      setSelectedRole("Я родитель");
      setSelectedOption("Advanced");
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setModalMessage("Ошибка при отправке формы. Попробуйте еще раз.");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>
        Запишитесь на <span className="highlight">бесплатный</span> пробный урок!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="input-group">
            <input
              type="text"
              placeholder="Введите свое имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              className={nameError ? "input-error" : ""}
            />
            <div className={`phoneInput ${phoneError ? "input-error" : ""}`}>
              <PhoneInput
                international
                defaultCountry="UZ"
                value={phone}
                onChange={(value) => {
                  setPhone(value);
                  setPhoneError(false);
                }}
              />
            </div>
          </div>
          <div className="dropdown__wrapper">
            <div className="dropdown-container">
              <div
                className="dropdown-display"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{selectedRole}</span>
                <div className="dropdown-arrow">
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  {["Я родитель", "Я ученик"].map((role, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedRole(role);
                        setDropdownOpen(false);
                      }}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="dropdown-container">
              <div
                className="dropdown-display"
                onClick={() => setOptionDropdownOpen(!optionDropdownOpen)}
              >
                <span>{selectedOption}</span>
                <div className="dropdown-arrow">
                  {optionDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {optionDropdownOpen && (
                <ul className="dropdown-menu">
                  {["Advanced", "General"].map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedOption(option);
                        setOptionDropdownOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <FaSpinner className="spinner-icon" />
          ) : (
            "Записаться"
          )}
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>ОК</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
