import BrandHero from "../component/brandbanner";
import BrandsClient from "../component/brandclient";

export const metadata = {
  title: "HOORAB GROUP | Our Brands  ",
  description:
    "Discover ZYLLIQ, HOORAB, and HDS — powerful brands delivering innovation and corporate excellence.",
};

export default function Page() {
  return (
    <>
      <BrandHero />
      <BrandsClient />
    </>
  );
}
