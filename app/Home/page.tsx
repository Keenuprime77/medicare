import Header from "@/components/header";
import styles from "./checkmark.module.css";

export default function HomePage() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col bg-[linear-gradient(147deg,_#4B4E53_0%,_#000000_74%)] w-[28%] ml-11 items-center justify-between rounded-2xl h-[30%] shadow-2xl xl:px-12">
        <h1 className="my-3">Today you have to give</h1>
        <div className={`${styles.card} flex`}>
          <h1 className="my-3">Medicine name</h1>
          <div>
            <input type="checkbox" id="customCheckbox" className={styles._checkbox} />
            <label htmlFor="customCheckbox" className={styles.label}>
              <div className={styles.tick_mark}></div>
            </label>
          </div>
        </div>
        <button className="bg-[#03e9f4] text-black font-semibold px-4 mb-6 my-2 py-2 rounded transition duration-150 ease-in-out transform active:scale-75 active:shadow-inner shadow-lg">
          Done
        </button>
      </div>
    </div>
  );
}
