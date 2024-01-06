import {
  Navigate,
  Route,
  Routes,
  createRoutesFromElements,
  json,
} from "react-router-dom";
import { Root } from "./ui/root/root";
import Dashboard from "./ui/screens/Dashboard/dashboard";
import Page404 from "./ui/screens/404/404";
import Setup1 from "./ui/screens/setup-1/setup1";
import Setup2 from "./ui/screens/setup-2/setup2";
import Setup3 from "./ui/screens/setup-3/setup3";
import Setup4 from "./ui/screens/setup-4/setup4";
import defaultCopyStrings from "./assets/strings/defaults";
import { getStringsForAdId } from "./ui/api/server";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route id="root" path="/" element={<Dashboard />} />
      <Route path="/setup" element={<Root />}>
        <Route index element={<Navigate to={"/setup/step-1"} replace />} />
        <Route
          path="step-1"
          element={<Setup1 stringsObj={{}} suppressHydrationWarning />}
        />
        <Route path="step-2" element={<Setup2 />} />
        <Route path="step-3" element={<Setup3 />} />
        <Route path="step-4" element={<Setup4 />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

const baseLoader = () => {
  return json(defaultCopyStrings);
};

const routeJson = createRoutesFromElements(
  <>
    <Route
      path="/"
      id="root"
      element={<Dashboard stringsObj={defaultCopyStrings} />}
      loader={async ({ request }) => {
        const url = new URL(request.url);
        const adId = url.searchParams.get("ad_group_id");

        if (!adId) {
          return json(defaultCopyStrings);
        }

        const newStrings = await getStringsForAdId(() => {}, adId);

        return json(newStrings);
      }}
    />
    <Route path="/setup" element={<Root />}>
      <Route index element={<Navigate to={"/setup/step-1"} replace />} />
      <Route path="step-1" element={<Setup1 />} loader={baseLoader} />
      <Route path="step-2" element={<Setup2 />} loader={baseLoader} />
      <Route path="step-3" element={<Setup3 />} loader={baseLoader} />
      <Route path="step-4" element={<Setup4 />} loader={baseLoader} />
    </Route>
    <Route path="*" element={<Page404 />} />
  </>
);

export { routeJson };
