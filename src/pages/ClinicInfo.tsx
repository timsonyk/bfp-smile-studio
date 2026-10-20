import { Link } from "react-router-dom";
import LegalPage, { LegalH2 } from "@/components/LegalPage";
import { clinicInfo, supervisors, MEDICAL_WARNING } from "@/data/clinicInfo";

// Информация, которую медорганизация обязана разместить на сайте
// (Правила предоставления платных медицинских услуг, ПП РФ от 11.05.2023 № 736)
const ClinicInfo = () => {
  const c = clinicInfo;
  return (
    <LegalPage
      title="Сведения о медицинской организации"
      canonical="/svedeniya"
      description="Реквизиты, лицензия, режим работы и контролирующие органы стоматологической клиники bfp concept."
    >
      <LegalH2>Медицинская организация</LegalH2>
      <ul>
        <li>{c.legalName}</li>
        <li>ОГРН {c.ogrn}, ИНН {c.inn}</li>
        <li>Адрес: {c.address}</li>
        <li>
          Телефон: <a href={c.phoneHref}>{c.phone}</a>, электронная почта:{" "}
          <a href={`mailto:${c.email}`}>{c.email}</a>
        </li>
        <li>Режим работы: {c.hours}</li>
      </ul>

      <LegalH2>Лицензия</LegalH2>
      <p>
        Лицензия на осуществление медицинской деятельности № {c.license.number} от{" "}
        {c.license.date}, выдана: {c.license.issuer}. Сведения о лицензии и перечне работ
        (услуг) — в{" "}
        <a href={c.license.registryUrl} target="_blank" rel="noopener noreferrer">
          едином реестре лицензий Росздравнадзора
        </a>
        .
      </p>

      <LegalH2>Услуги и специалисты</LegalH2>
      <p>
        Перечень услуг — в разделе <Link to="/services">«Услуги»</Link>, сведения о врачах — в
        разделе <Link to="/team">«Команда»</Link>. Медицинские услуги оказываются на основании
        договора; до его заключения пациент может ознакомиться с прейскурантом, сведениями о
        квалификации врачей и порядком оказания услуг в клинике.
      </p>

      <LegalH2>Контролирующие органы</LegalH2>
      <ul>
        {supervisors.map((s) => (
          <li key={s.name}>
            {s.name} —{" "}
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.url.replace("https://", "")}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-foreground font-medium pt-6">{MEDICAL_WARNING}</p>
    </LegalPage>
  );
};

export default ClinicInfo;
