import { nextDynamic } from "components";
import LayoutSidebar from "components/layouts/LayoutSidebar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DoctorsListPage = () => {
  const DoctorsList = nextDynamic("DoctorsList");
  return (
    <LayoutSidebar>
      <DoctorsList />
    </LayoutSidebar>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default DoctorsListPage;
