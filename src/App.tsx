const Border = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="h-[4rem] bg-yellow-100">
        <h1 className="text-center font-medium text-[32px]">
          Header section
        </h1>
      </header>
      <main className="flex flex-1">
        <aside className="w-[20%] flex bg-red-200">
          <h1 className="m-auto font-medium text-[32px]">Side</h1>
        </aside>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex">
            {new Array(3).fill(0).map((_, idx) => (
              <section
                className={`w-full flex ${
                  idx === 1
                    ? "bg-green-200"
                    : idx === 2
                    ? "bg-red-200"
                    : "bg-blue-200"
                }`}
                key={idx}
              >
                <h1 className="text-[32px] m-auto font-medium">
                  Section {idx + 1}
                </h1>
              </section>
            ))}
          </div>
          <div className="h-[10rem]">
            <section className="h-[10rem] flex bg-purple-200">
              <h1 className="text-[32px] m-auto font-medium">Section 4</h1>
            </section>
          </div>
        </div>
      </main>
      <footer className="h-[4rem] my-auto bg-blue-100">
        <h1 className="text-center font-medium text-[32px]">
          Footer section
        </h1>
      </footer>
    </main>
  );
};

export default Border;
