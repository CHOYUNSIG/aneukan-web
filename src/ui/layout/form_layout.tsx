export default function FormLayout({
  title,
  subtitle,
  totalStep,
  currentStep,
  form,
}: {
  title: string;
  subtitle: string;
  totalStep: number;
  currentStep: number;
  form: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center justify-center bg-brand min-h-screen w-full p-32">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="text-2xl text-white">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row space-between items-center">
            <>
              {totalStep > 1 &&
                Array.from({ length: totalStep }).map((_, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="m-2 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg"
                        style={{
                          backgroundColor:
                            index === currentStep ? "white" : "black",
                          color: index === currentStep ? "black" : "white",
                        }}
                      >
                        {index + 1}
                      </div>
                      {index !== totalStep - 1 && (
                        <div className="flex flex-row gap-1">
                          <div className="w-1 h-1 rounded-full bg-black shadow-lg" />
                          <div className="w-1 h-1 rounded-full bg-black shadow-lg" />
                          <div className="w-1 h-1 rounded-full bg-black shadow-lg" />
                        </div>
                      )}
                    </>
                  );
                })}
            </>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">{form}</div>
        </div>
      </div>
    </div>
  );
}
