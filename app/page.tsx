import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex place-items-center gap-16">
        <Image
          className="rounded-full dark:brightness-75"
          src="/dp.jpg"
          alt="Arijit Patra Profile Display Picture"
          width={180}
          height={180}
          priority
        />
        <div className="text-lg leading-7 text-slate-700 dark:text-slate-300">
          <p>
            <span className="text-red-600">Hi, I am Arijit Patra.</span>{" "}
            Currently working as a Senior Frontend Engineer with InstaFreight,
            Berlin.
          </p>
          <p className="mt-6">
            I began my career on the Earth on June 26th, 1994 in Kolkata. Good
            designs keep me happy and I hate Comic Sans. Enjoy working on UI
            technologies and UX design. Beyond work you will find me managing
            events, travelling, doing photography, being part of social
            activities, trying hands on guitar, designing, making YouTube
            content or maybe doing something else. I also take up freelance
            assignments on - UI development, UX/UI design, photography,
            videography and designing.
          </p>
        </div>
      </div>
    </>
  );
}
