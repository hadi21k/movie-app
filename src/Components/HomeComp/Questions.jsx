import QuestionsBar from "./QuestionsBar";

const Questions = () => {
  return (
    <div className="bg-black min-h-[300px] py-10 border-b-8 border-[#222] text-white">
      <h1 className="mb-6 text-4xl font-bold text-center text-white">
        Frequently Asked Questions
      </h1>
      <QuestionsBar />
    </div>
  );
};

export default Questions;
