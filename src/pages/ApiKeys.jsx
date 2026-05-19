export default function ApiKeys() {
  return (
    <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm max-w-lg text-center">
        <h1 className="text-3xl font-extrabold text-[#121118] mb-4">API Keys</h1>
        <p className="text-[#525252] mb-6">
          API key management will be connected later.
        </p>
        <div className="w-full bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 mb-6">
          <code className="text-[#A8A8A8]">pk_test_xxxxxxxxxxxxxxxx</code>
        </div>
        <button className="w-full py-4 bg-[#121118] text-white font-bold rounded-xl opacity-50 cursor-not-allowed">
          Generate New Key
        </button>
      </div>
    </div>
  );
}
