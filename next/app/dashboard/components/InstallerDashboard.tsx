import { useEffect, useState } from 'react'
import InstallerForm from '@/app/components/Installer/InstallerForm'
import { sanityClient } from '@/sanity'

export default function InstallerDashboard() {
  const [forms, setForms] = useState(null)
  const [selectedForm, setSelectedForm] = useState(null)

  // Fetch forms from Sanity on component mount
  useEffect(() => {
    const fetchForms = async () => {
        const query = `*[_type == "selfCheckForm"]{title, sections}`
        const formData = await sanityClient.fetch(query)        
      setForms(formData)
    }
    fetchForms()
  }, [])

  // Handle form selection
  const handleFormSelection = (form) => {
    setSelectedForm(form)
  }

  return (
    <div>
      <h1>Installer Dashboard</h1>

      <div>
        {/* Display form options */}
        <h2>Fill Self-Check Forms</h2>
        {forms ? (
          forms.map((form, index) => (
            <div key={index}>
              <button onClick={() => handleFormSelection(form)}>
                {form.title}
              </button>
            </div>
          ))
        ) : (
          <p>Loading forms...</p>
        )}
      </div>

      {/* Render the selected form */}
      {selectedForm && (
        <div>
          <h2>Start Form</h2>
          <InstallerForm form={selectedForm} />
        </div>
      )}
    </div>
  )
}
