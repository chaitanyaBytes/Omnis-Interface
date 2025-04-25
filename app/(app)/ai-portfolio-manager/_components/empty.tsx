// "use client"

// import React, { useState } from 'react'

// import { MultimodalInput } from './chat-input';
// // import StarterButtons from './starter-buttons';

// import { cn, generateUUID } from '@/lib/utils';
// import { logos } from '@/lib/icons';
// import type { Attachment, UIMessage } from 'ai';
// import { useChat } from '@ai-sdk/react';
// import { toast } from 'sonner';
// import ChatInput from './input';

// const EmptyChat: React.FC = () => {
//     const id = generateUUID();
//     const selectedChatModel = "chat-model"
//     const initialMessages: any = []

//     const [attachments, setAttachments] = useState<Array<Attachment>>([]);

//     const {
//         messages,
//         setMessages,
//         handleSubmit,
//         input,
//         setInput,
//         append,
//         status,
//         stop,
//         reload,
//     } = useChat({
//         id,
//         body: { id, selectedChatModel: selectedChatModel },
//         initialMessages,
//         experimental_throttle: 100,
//         sendExtraMessageFields: true,
//         generateId: generateUUID,
//         onError: () => {
//             toast.error('An error occurred, please try again!');
//         },
//     });

//     return (
//         <div className={cn(
//             // Base
//             "flex flex-col items-center justify-center w-full h-full px-4",
//         )}>
//             <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-4 md:gap-8">
//                 <div className="flex flex-col gap-4 items-center justify-center">
//                     <logos.omnisBlack className="w-16 h-16" />
//                     <div className="flex flex-col gap-1">
//                         <h1 className="font-semibold text-center text-2xl">
//                             How can <span className="text-brand-600 font-bold inline">We</span> help you?
//                         </h1>
//                     </div>
//                 </div>
//                 {/* <form className="flex px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
//                     <MultimodalInput
//                         chatId={id}
//                         input={input}
//                         setInput={setInput}
//                         handleSubmit={handleSubmit}
//                         status={status}
//                         stop={stop}
//                         attachments={attachments}
//                         setAttachments={setAttachments}
//                         messages={messages}
//                         setMessages={setMessages}
//                         append={append}
//                     />
//                 </form> */}
//                 <ChatInput />
//                 {/* <StarterButtons /> */}
//             </div>
//         </div>
//     )
// }

// export default EmptyChat;   