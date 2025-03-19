export default function Container({ children }) {
    return (
      <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col space-y-6 h-full w-full ">
        {children}
      </div>
    );
  }
  