const Border = () => {
  return (
    <main className="border-2 broder-solid border-green-500 flex flex-col min-h-screen">
      <header className="border-2 border-oslid border-green h-[4rem]">
        <h1 className="text-center font-bold text-[32px]">Header section</h1>
      </header>
      <main className="border-2 border-solid border-red-500 flex flex-1">
        <aside className="border-2 border-solid border-green-500 w-[20%] flex">
          <h1 className="m-auto font-bold text-[32px]">Side</h1>
        </aside>
        <div className="border-2 border-solid border-red-500 flex-1 flex flex-col">
          <div className="border-2 border-solid border-green-500 flex-1 flex">
            {new Array(3).fill(0).map((_, idx) => (
              <section
                className={`border-2 border-solidh-[10rem] w-full flex ${
                  idx === 0
                    ? "bg-blue-500"
                    : idx === 1
                    ? "bg-green-500"
                    : idx === 2
                    ? "bg-red-500"
                    : "bg-blue-500"
                }`}
                key={idx}
              >
                <h1 className="text-[32px] m-auto font-semibold">
                  Section {idx + 1}
                </h1>
              </section>
            ))}
          </div>
          <div className="border-2 border-solid border-green-500 h-[10rem]">
            <section className="border-2 border-solid border-green-500 h-[10rem] flex">
              <h1 className="text-[32px] m-auto font-semibold">Section 4</h1>
            </section>
          </div>
        </div>
      </main>
      <footer className="border-2 border-oslid border-green h-[4rem] my-auto">
        <h1 className="text-center font-bold text-[32px]">Footer section</h1>
      </footer>
    </main>
  );
};

export default Border;
