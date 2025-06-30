import { Sheet } from 'react-modal-sheet';
import './CoursesSheet.css';
import soon from '../../../../assets/icons/soon.png';
import calendar from '../../../../assets/icons/calendar.svg';
import cap from '../../../../assets/icons/cap.svg';
import format from '../../../../assets/icons/format.svg';
import time from '../../../../assets/icons/time.svg';
import { Link } from 'react-scroll';
import { useTranslation } from '../../../../contexts/I18nContext';


const CoursesSheet = ({ isOpen, onClose, course, index, onContactClick }) => {
  if (!course) return null;
const { t } = useTranslation();

  const isBlurred = index === 2 || index === 3;

  return (
    <Sheet
  isOpen={isOpen}
  onClose={onClose}
  snapPoints={[1, 1, 0]}
  initialSnap={0}
  detent="content-height"
>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="sheet-content">
            <h3>{course.title}</h3>
            <div className="course__subtitle">
              <h4>{t('coursesSheet.description')}</h4>
              <p>{course.description}</p>
            </div>
            <div className="keys">
             <h4 className="features-label">{t('coursesSheet.features')}</h4>
            <ol>
              {Array.isArray(course?.features) && course.features.map((f, i) => (
  <li key={i}>{f}</li>
))}

            </ol>
            </div>
            <div className="course-info">
              <ul className="meta-info">
                <li><img src={calendar} alt="" /> <span>{course.duration}</span></li>
                <li><img src={time} alt="" /> <span>{course.time}</span></li>
                <li><img src={format} alt="" /> <span>{course.format}</span></li>
                <li><img src={cap} alt="" /> <span>{course.age}</span></li>
              </ul>
              <div className="courses-image-wrapper">
                <img
                  className={`courses-image${isBlurred ? ' blurred' : ''}`}
                  src={course.img}
                  alt=""
                />
                {isBlurred && (
                  <img
                    className="soon-img"
                    src={soon}
                    alt="soon-img"
                  />
                )}
              </div>
            </div>
              <div className="contacts-boxes">
                <Link to='banner' onClick={onClose} smooth={true} duration={500} offset={-150} className='footer__shadow-btn'>
  {t('coursesSheet.signup')}
</Link>
                <button className="shadow__btn" onClick={()=>{onContactClick();onClose()}}>
            <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
          </button>
              </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
    
  );
  
};

export default CoursesSheet;
