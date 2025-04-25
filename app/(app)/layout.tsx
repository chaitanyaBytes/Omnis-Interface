
import { ReactNode } from "react";
// import { ChatProvider } from "./ai-portfolio-manager/_contexts/chat";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative flex flex-col space-y-4 py-2">
            <div className="!mb-6 space-y-4">
                {/* <ChatProvider> */}
                {children}
                {/* </ChatProvider> */}
            </div>
        </div>
    );
};

export default Layout;