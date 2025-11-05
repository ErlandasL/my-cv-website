'use client'

export async function generatePDF() {
  try {
    console.log('Starting PDF generation...')

    // Get the current page URL
    const currentUrl = window.location.href

    // Call the API to generate PDF
    const response = await fetch(`/api/generate-pdf?url=${encodeURIComponent(currentUrl)}`)

    if (!response.ok) {
      throw new Error(`Failed to generate PDF: ${response.statusText}`)
    }

    // Get the PDF blob
    const blob = await response.blob()

    // Create a download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Erlandas_Lisauskas_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    console.log('PDF downloaded successfully')
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Error generating PDF: ' + (error instanceof Error ? error.message : 'Unknown error'))
  }
}
