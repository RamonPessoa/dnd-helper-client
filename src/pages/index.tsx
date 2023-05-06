import SignupForm from "@/features/user/user-signup/components/user-signup-form";
import Style from "./home.module.css";
import UserSigninForm from "@/features/user/user-signin/components/user-signin-form";
import useHome from "./use-home";
import Tabs from "@/components/tabs/tabs";

export default function Home() {
  const { tabs, selectedTab, handleSelectTab } = useHome();
  return (
    <main className="flex flex-col items-center pt-20 h-screen login-bg">
      <div className={`flex flex-col gap-20 w-full max-w-xl`}>
        <h1 className="text-center text-2xl font-bold">DnD Helper</h1>
        <div
          className={`p-12 ${Style["login-signup-forms"]} flex flex-col gap-14`}
        >
          <Tabs
            items={tabs}
            defaultSelected={selectedTab}
            onChange={handleSelectTab}
          />
          {selectedTab === tabs[0] && <UserSigninForm />}
          {selectedTab === tabs[1] && <SignupForm />}
        </div>
      </div>
    </main>
  );
}
