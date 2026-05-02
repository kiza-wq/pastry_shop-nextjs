import { useState } from "react";

export default function DeleteButton({ label, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-center text-xl mb-5 font-semibold text-gray-500">
            Are you sure that you want do delete?
          </p>
          <div className="flex gap-2 mt-1">
            <button
              type="button"
              className="px-2 py-1 border border-black text-black rounded-xl hover:bg-gray-100"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-2 py-1 border border-black text-red-600 rounded-xl hover:bg-red-100"
              onClick={() => {
                onDelete();
                setShowConfirm(false);
              }}
            >
              Yes,&nbsp;delete!
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button type="button" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}
