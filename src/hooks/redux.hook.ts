import { useAppSelector, useAppDispatch } from "@/redux/hook";

import { removeUser, setUser } from "@/redux/features/userSlice";

export const useUser = () => {
  const user = useAppSelector((state: any) => state.user);
  const dispatch = useAppDispatch();

  return {
    user,
    setUserDispatch: (user: any) => dispatch(setUser(user)),
    logOut: () => dispatch(removeUser()),
    isSignedIn: !!user.id,
  };
};
