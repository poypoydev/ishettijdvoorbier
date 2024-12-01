const ANSWERS = [
  "Ja.",
  "Absoluut.",
  "Zeker weten.",
  "Geen twijfel mogelijk.",
  "Uiteraard.",
  "Natuurlijk.",
  "Was dat een serieuze vraag?",

  "Zeker weten.",
  "Ongetwijfeld.",
  "Eentje dan.",
  "Uh-huh.",
];

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const hasQuery = queryParams.get("naam"); // returns null if not found
  const randomAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
  const formattedAnswer = hasQuery
    ? randomAnswer.slice(0, -1) + " " + hasQuery + randomAnswer.slice(-1)
    : randomAnswer;

  return (
    <div className="flex-row items-between justify-center  h-screen ">
      <div className="flex-row justify-center items-center relative top-32 flex-wrap">
        <h2 className="text-center text-xl ">Is het tijd voor bier?</h2>
        <h1 className="font-bold leading-snug md:leading-normal text-[45px] md:text-[80px] my-10 text-center">
          {formattedAnswer}
        </h1>
        <div className="text-center">
          <p className="text-lg">
            Hint: het is <strong>altijd</strong> tijd voor bier.
          </p>
        </div>
      </div>
      <p className="text-center absolute bottom-4 left-[50%] translate-x-[-50%]">
        Met liefde gemaakt in 🇳🇱.
      </p>
    </div>
  );
}

export default App;
