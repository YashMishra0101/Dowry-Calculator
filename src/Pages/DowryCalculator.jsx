import React, { useState } from "react";

const DowryCalculator = () => {
  const [boyData, setBoyData] = useState({
    name: "",
    age: "",
    salary: "",
    salaryUnit: "lakh",
    education: "10th",
    job: "private",
  });

  const [girlData, setGirlData] = useState({
    name: "",
    age: "",
    salary: "",
    salaryUnit: "lakh",
    education: "10th",
    job: "private",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHow, setShowHow] = useState(false);

  const unitMultiplier = {
    thousand: 1000,
    lakh: 100000,
    crore: 10000000,
  };

  const convertToNumber = (value, unit) =>
    parseFloat(value || 0) * unitMultiplier[unit];

  const formatMoney = (value) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Crore`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)} Lakh`;
    if (value >= 1000) return `₹${(value / 1000).toFixed(0)} Thousand`;
    return `₹${value.toFixed(0)}`;
  };

  const calculateDowry = () => {
    setLoading(true);

    setTimeout(() => {
      const boySalary = convertToNumber(boyData.salary, boyData.salaryUnit);
      const girlSalary = convertToNumber(girlData.salary, girlData.salaryUnit);

      let giver = boySalary >= girlSalary ? "boy" : "girl";
      let baseSalary = giver === "boy" ? boySalary : girlSalary;

      let baseDowry = baseSalary * 0.4;

      const edu = giver === "boy" ? boyData.education : girlData.education;
      if (edu === "12th") baseDowry *= 1.1;
      else if (edu === "bachelor") baseDowry *= 1.3;
      else if (edu === "master") baseDowry *= 1.5;
      else if (edu === "phd") baseDowry *= 1.7;
      else if (edu === "diploma") baseDowry *= 1.05;
      else if (edu === "no-degree") baseDowry *= 0.9;

      const job = giver === "boy" ? boyData.job : girlData.job;
      if (job === "doctor") baseDowry *= 1.6;
      else if (job === "government") baseDowry *= 1.4;
      else if (job === "engineer") baseDowry *= 1.2;
      else if (job === "business") baseDowry *= 1.3;
      else if (job === "startup") baseDowry *= 1.5;
      else if (job === "artist") baseDowry *= 1.1;

      const minDowry = Math.max(baseDowry * 0.7, 50000);
      const maxDowry = baseDowry * 1.2;

      setResult({
        giver,
        minAmount: minDowry,
        maxAmount: maxDowry,
      });

      setLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setResult(null);
    setBoyData({
      name: "",
      age: "",
      salary: "",
      salaryUnit: "lakh",
      education: "10th",
      job: "private",
    });
    setGirlData({
      name: "",
      age: "",
      salary: "",
      salaryUnit: "lakh",
      education: "10th",
      job: "private",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-700 text-center">
          <div className="animate-spin border-4 border-gray-400 border-t-transparent rounded-full w-12 h-12 mx-auto mb-4"></div>
          <p className="text-lg">Calculating the result... </p>
        </div>
      </div>
    );
  }

  if (result) {
    const isDataEmpty =
      !boyData.salary || !girlData.salary || !boyData.name || !girlData.name;

    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-lg w-full border">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            😂 Result is here
          </h2>

          {isDataEmpty ? (
            <p className="text-gray-500 mb-6">No data found 😅</p>
          ) : (
            <>
              <p className="mb-4 text-gray-600">
                Whoever earns more has to give the money
              </p>
              <p className="text-xl font-bold text-red-500 mb-6">
                {result.giver === "boy"
                  ? "The Boy will pay 😂"
                  : "The Girl will pay 😂"}
              </p>

              <div className="bg-pink-100 rounded-xl p-4 text-gray-800 mb-6">
                <p>💰 Minimum Amount: {formatMoney(result.minAmount)}</p>
                <p>💰 Maximum Amount: {formatMoney(result.maxAmount)}</p>
              </div>
            </>
          )}

          <p className="text-gray-500 text-sm mb-6">
            (Remember: This is just a joke for fun, not serious)
          </p>

          <button
            onClick={resetForm}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg"
          >
            🔄 Calculate Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">
            😂 Comedy Dowry Calculator 😂{" "}
          </h1>
          <p className="text-gray-600">
            This is a light-hearted project made just for fun. Marriage is about
            ❤️ love, respect, and companionship.
          </p>
          <p className="text-gray-700 font-medium mb-2">
            We use funny logic here: Whoever earns more has to give money.
            <div>
              {" "}
              (If girl earns more → she gives, if boy earns more → he gives)
            </div>
          </p>
        </div>

        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6 text-sm leading-relaxed">
          ⚠️ <strong>Important:</strong>
          <ul className="list-disc ml-5 mt-2">
            <li>This project is only for fun and entertainment.</li>
            <li>
              We follow a playful rule: The person earning more has to “pay”.
            </li>
            <li>
              If the girl earns more → she will “pay”, if the boy earns more →
              he will “pay”.
            </li>
            <li>Just enjoy and laugh, it’s all for comedy😂</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="mb-6">
          <button
            onClick={() => setShowHow(!showHow)}
            className={`border px-4 py-2 rounded text-base font-semibold 
                ${
                  showHow
                    ? "bg-green-300 text-white"
                    : "bg-green-400 text-gray-800"
                } 
                hover:opacity-80 transition-colors`}
          >
            ℹ️ How it works? (Click to {showHow ? "hide" : "show"}👆)
          </button>

          {showHow && (
            <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 p-4 rounded-lg mt-3 text-gray-800 text-sm leading-relaxed shadow-md">
              <p>
                💡 Step 1: We check the salaries of both the boy and the girl.
              </p>
              <p>
                💡 Step 2: The person who earns more will “pay” a fun amount. 😄
              </p>
              <p>
                🎓 Step 3: Education level affects the amount slightly (higher
                education → bigger multiplier).
              </p>
              <p>
                💼 Step 4: Certain professions like doctors, government jobs,
                engineers, or startups can increase the amount further.
              </p>
              <p>
                💰 Step 5: Finally, we show a fun range – minimum and maximum –
                so you can laugh at the result.
              </p>
              <p className="mt-2 font-bold text-pink-600">
                ⚠️ Note: This is just for fun.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-bold text-orange-500 mb-4">
              👦 Boy's Info
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 mb-3 rounded"
              value={boyData.name}
              onChange={(e) => setBoyData({ ...boyData, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Age"
              className="w-full border p-2 mb-3 rounded"
              value={boyData.age}
              onChange={(e) => setBoyData({ ...boyData, age: e.target.value })}
            />
            <div className="flex gap-2 mb-3">
              <input
                type="number"
                placeholder="Per Month Salary"
                className="flex-1 border p-2 rounded"
                value={boyData.salary}
                onChange={(e) =>
                  setBoyData({ ...boyData, salary: e.target.value })
                }
              />
              <select
                value={boyData.salaryUnit}
                onChange={(e) =>
                  setBoyData({ ...boyData, salaryUnit: e.target.value })
                }
                className="border p-2 rounded"
              >
                <option value="thousand">Thousand</option>
                <option value="lakh">Lakh</option>
                <option value="crore">Crore</option>
              </select>
            </div>

            <label className="block mb-1 font-medium text-gray-400">
              Your Education
            </label>
            <select
              className="w-full border p-2 mb-3 rounded"
              value={boyData.education}
              onChange={(e) =>
                setBoyData({ ...boyData, education: e.target.value })
              }
            >
              <option value="">Select Education</option>
              <option value="no-degree">No Degree</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor’s Degree</option>
              <option value="master">Masters</option>
              <option value="phd">PhD</option>
            </select>

            <label className="block mb-1 font-medium text-gray-400">
              Your Profession
            </label>
            <select
              className="w-full border p-2 rounded"
              value={boyData.job}
              onChange={(e) => setBoyData({ ...boyData, job: e.target.value })}
            >
              <option value="">Select Profession</option>
              <option value="private">Private</option>
              <option value="government">Government</option>
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              <option value="business">Business</option>
              <option value="startup">Startup Founder</option>
              <option value="artist">Artist</option>
            </select>
          </div>

          <div>
            <h2 className="text-lg font-bold text-orange-500 mb-4">
              👧 Girl's Info
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 mb-3 rounded"
              value={girlData.name}
              onChange={(e) =>
                setGirlData({ ...girlData, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Age"
              className="w-full border p-2 mb-3 rounded"
              value={girlData.age}
              onChange={(e) =>
                setGirlData({ ...girlData, age: e.target.value })
              }
            />
            <div className="flex gap-2 mb-3">
              <input
                type="number"
                placeholder="Per Month Salary"
                className="flex-1 border p-2 rounded"
                value={girlData.salary}
                onChange={(e) =>
                  setGirlData({ ...girlData, salary: e.target.value })
                }
              />
              <select
                value={girlData.salaryUnit}
                onChange={(e) =>
                  setGirlData({ ...girlData, salaryUnit: e.target.value })
                }
                className="border p-2 rounded"
              >
                <option value="thousand">Thousand</option>
                <option value="lakh">Lakh</option>
                <option value="crore">Crore</option>
              </select>
            </div>

            <label className="block mb-1 font-medium text-gray-400">
              Your Education
            </label>
            <select
              className="w-full border p-2 mb-3 rounded"
              value={girlData.education}
              onChange={(e) =>
                setGirlData({ ...girlData, education: e.target.value })
              }
            >
              <option value="">Select Education</option>
              <option value="no-degree">No Degree</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor’s Degree</option>
              <option value="master">Masters</option>
              <option value="phd">PhD</option>
            </select>

            <label className="block mb-1 font-medium text-gray-400">
              Your Profession
            </label>
            <select
              className="w-full border p-2 rounded"
              value={girlData.job}
              onChange={(e) =>
                setGirlData({ ...girlData, job: e.target.value })
              }
            >
              <option value="">Select Profession</option>
              <option value="private">Private</option>
              <option value="government">Government</option>
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              <option value="business">Business</option>
              <option value="startup">Startup Founder</option>
              <option value="artist">Artist</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={calculateDowry}
            className="bg-orange-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            Calculate 😂
          </button>
        </div>

        <div className="bg-gray-100 mt-6 p-4 rounded-lg text-center text-sm text-gray-600 leading-relaxed">
          <strong>Note:</strong>
          <p>
            This is just a fun project. The results don’t mean anything serious.
            Love, care, respect, and trust are what truly matter ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default DowryCalculator;
