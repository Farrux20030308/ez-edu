import { useState, useRef, useEffect } from "react";
import "./form.css";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { FaChevronDown, FaChevronUp, FaSpinner } from "react-icons/fa";
import { useTranslation } from '../../../../contexts/I18nContext';

const Form = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
const [selectedRole, setSelectedRole] = useState("");
const [selectedOption, setSelectedOption] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [optionDropdownOpen, setOptionDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const roleRef = useRef(null);
  const optionRef = useRef(null);
useEffect(() => {
  setSelectedRole(t("form.role.default"));
  setSelectedOption(t("form.course.default"));
}, [t]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setOptionDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      setModalMessage(t("form.modalEmpty"));
      setShowModal(true);
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });

    setIsLoading(true);
    try {
      const formData = {
        Date: date,
        Time: time,
        Character: selectedRole === t("form.role.default") ? "❌" : selectedRole,
        Course: selectedOption === t("form.course.default") ? "❌" : selectedOption,
        Name: name,
        "Phone-number": phone,
        Telegram: telegram === '' ? "❌" : telegram
      };

      await fetch("https://script.google.com/macros/s/AKfycbzRtlRQbVP7CWYUxkQOry-kpKoiYfjI1ZdF5ZkDQW4xdNhYBbgw_kMJ_NGMJ7fbexyJFQ/exec", {
        method: "POST",
        body: new URLSearchParams(formData),
      });

      setModalMessage(t("form.modalSuccess"));
      setShowModal(true);
      setName("");
      setPhone("");
      setTelegram("");
      setSelectedRole(t("form.role.default"));
      setSelectedOption(t("form.course.default"));
    } catch {
      setModalMessage(t("form.modalError"));
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}

      <h2 dangerouslySetInnerHTML={{ __html: t("form.title") }} />

      <form onSubmit={handleSubmit} name="submit-to-google-sheet">
        <div className="form__group">
          <div className="input-group">
            <input
              type="text"
              placeholder={t("form.namePlaceholder")}
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
            <input
              type="text"
              placeholder={t("form.telegramPlaceholder")}
              value={telegram}
              onChange={(e) => {
                let value = e.target.value;
                value = '@' + value.replace(/^@+/, '');
                setTelegram(value);
              }}
              onBlur={() => {
                if (telegram.trim() === '@') {
                  setTelegram('');
                }
              }}
            />
          </div>

          <div className="dropdown__wrapper">
            <div className="dropdown-container" ref={roleRef}>
              <div className="dropdown-display" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span>{selectedRole}</span>
                <div className="dropdown-arrow">
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  {[t("form.role.parent"), t("form.role.student")].map((role, index) => (
                    <li key={index} onClick={() => { setSelectedRole(role); setDropdownOpen(false); }}>
                      {role}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="dropdown-container" ref={optionRef}>
              <div className="dropdown-display" onClick={() => setOptionDropdownOpen(!optionDropdownOpen)}>
                <span>{selectedOption}</span>
                <div className="dropdown-arrow">
                  {optionDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {optionDropdownOpen && (
                <ul className="dropdown-menu">
                  {[t("form.course.notChosen"), "General", "Individual", "Kids", "IELTS"].map((option, index) => (
                    <li key={index} onClick={() => { setSelectedOption(option); setOptionDropdownOpen(false); }}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? <FaSpinner className="spinner-icon" /> : t("form.submit")}
        </button>
      </form>
    </div>
  );
};

export default Form;
