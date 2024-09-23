// app/components/InstallerForm.tsx

import { sanityClient } from "@/sanity";
import { fetchFormQuery } from "@/queries/fetchForm";
import { GetServerSideProps } from "next";
import React from "react";

// Define a type for form data
interface Row {
  rowId: string;
  label: string;
  type: string;
  options?: string[];
  note?: string;
}

interface Section {
  title: string;
  rows: Row[];
}

interface FormProps {
  form: {
    title: string;
    sections: Section[];
  };
}

const InstallerForm: React.FC<FormProps> = ({ form }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-8">{form.title}</h2>
      
      {form.sections.map((section) => (
        <div key={section.title} className="mb-10">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          {section.rows.map((row) => (
            <div key={row.rowId} className="grid grid-cols-12 gap-4 mb-2 border-b pb-2">
              {/* Row Label */}
              <div className="col-span-2 font-semibold">{row.label}</div>

              {/* Input Field */}
              <div className="col-span-6">
                {row.type === "select" && row.options ? (
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    {row.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                )}
              </div>

              {/* Note (if available) */}
              {row.note && <div className="col-span-4 text-gray-500">{row.note}</div>}
            </div>
          ))}
        </div>
      ))}

      {/* Submit Button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};

// Fetch data using `getServerSideProps`
export const getServerSideProps: GetServerSideProps = async () => {
  const form = await sanityClient.fetch(fetchFormQuery);

  return {
    props: {
      form: form[0], // Assuming you fetch the first form
    },
  };
};

export default InstallerForm;
