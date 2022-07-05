import { nextDynamic } from "components";
import LayoutSidebar from "components/layouts/LayoutSidebar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { dehydrate, DehydratedState, QueryClient } from "react-query";

const DoctorsPage = () => {
  const Doctors = nextDynamic("Doctors");
  return (
    <LayoutSidebar>
      <Doctors />
    </LayoutSidebar>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery("socials", socials);
  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default DoctorsPage;
