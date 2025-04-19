import Cookies from "js-cookie";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface userStoreResponse {
    success: boolean;
    message: string;
    role: string;
    token: string;
    user: {
        id: string;
        username: string;
        email: string;
        phone: string;
        image: string;
        role: string;
        contact_number_verified: number;
        doctor_id: string | null;
    }
}

export interface userDetails {
    id: string;
    username: string;
    email: string;
    phone: string;
    image: string;
    role: string;
    contact_number_verified: number;
    doctor_id: string | null;
}

interface UserState {
    isLoggedIn: boolean;
    userDetails: userDetails | null;
    logout: () => void;
    getUserDetails: () => { id: string; username: string; email: string; phone: string; image: string; role: string; contact_number_verified: number; doctor_id: string | null } | null;
    fetchUserDetails: (response: userStoreResponse) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            isLoggedIn: false,
            userDetails: null,
            logout: async () => {
                set({ isLoggedIn: false, userDetails: null });
                //localStorage.removeItem("token");
                Cookies.remove("token");
                localStorage.clear();
                window.location.href = "/";
            },
            fetchUserDetails: (response) => {
                set({
                    isLoggedIn: true,
                    userDetails: response.user
                });
                Cookies.set("token", response.token, { expires: 7 });
                // localStorage.setItem("token", response.token);
            },
            getUserDetails: () => {
                return get().userDetails;
            },
        }),
        {
            name: 'user-store',
        }
    )
)


