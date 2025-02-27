import { SafeArea } from "@repo/bridge-web/SafeArea";
import { Button } from "@repo/design-system/Button";
import { Text } from "@repo/design-system/Text";
import { toast } from "@repo/design-system/Toast";
import { http } from "@repo/http";
import { Stack } from "@repo/ui/Stack";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { authStore } from "~/entities/user/model/auth.store";

export const LoginPage = () => {
  const form = useForm<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const auth = authStore.useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data: { id: string }) => {
    const response = await postUsersTest(data);
    const accessToken = response.response.headers.get("Authorization");
    auth.setAccessToken(accessToken);
    toast.success("회원가입 완료");
    navigate("/home");
  };

  return (
    <SafeArea className=" flex flex-col w-full" edges={["top", "bottom", "right", "left"]}>
      <Text className=" px-4 mt-4">Login Page</Text>

      <Stack className=" px-4 py-4 w-full">
        <form className=" gap-y-4 flex flex-col w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <input
            className={inputStyle()}
            {...form.register("id")}
            type="text"
            placeholder="아이디"
          />

          <Button type="submit" className=" mt-16">
            로그인
          </Button>
        </form>
        <button
          className=" mt-4 text-gray-600"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          계정 생성하기
        </button>
        <button
          className=" mt-4 text-gray-600"
          onClick={() => {
            localStorage.setItem("hasVisited", "false");
            navigate("/");
          }}
        >
          온보딩 퍼널 다시보기
        </button>
      </Stack>
      {isOpen && <CreateAccountSection />}
    </SafeArea>
  );
};

const postUsersTest = async (props: { id: string }) => {
  return http.post("/users/test", { email: props.id, isShortLivedAccessToken: true });
};

const CreateAccountSection = () => {
  const form = useForm<{ id: string }>();
  const auth = authStore.useAuth();
  const _navigate = useNavigate();

  const onSubmit = async (data: { id: string }) => {
    const response = await postUsersTest(data);
    const accessToken = response.response.headers.get("Authorization");
    auth.setAccessToken(accessToken);
    toast.success("회원가입 완료");
  };
  return (
    <Stack className=" px-4">
      <Text>회원가입</Text>
      <form className=" gap-y-4 flex flex-col w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <input className={inputStyle()} {...form.register("id")} type="text" placeholder="아이디" />

        <Button type="submit" className=" mt-16">
          회원가입
        </Button>
      </form>
    </Stack>
  );
};

const inputStyle = cva(
  " py-[4px] px-[12px]  rounded-md border border-gray-200 w-full text-gray-600",
);
