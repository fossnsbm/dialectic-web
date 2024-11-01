'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/common/buttons'
import { useState } from 'react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/components/ui/input'

export default function SignUpDialog() {
  const [values, setValues] = useState([15000, 100000])
  const [step, setStep] = useState(1)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    position: '',
    duration: '',
    description: '',
    location: '',
    company: '',
  })

  const clearInputs = () => {
    setFormData({
      title: '',
      position: '',
      duration: '',
      description: '',
      location: '',
      company: '',
    })
    setSelectedFile(null)
    setUploadStatus('')
    setStep(1)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handlePrevious = (e: React.FormEvent) => {
    e.preventDefault()
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)

    // Here you can also handle the file upload if necessary
    await handleUpload()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
    setUploadStatus('')
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first!')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setUploadStatus('File uploaded successfully!')
      } else {
        setUploadStatus('File upload failed!')
      }
    } catch (error) {
      setUploadStatus('An error occurred while uploading the file.')
      console.error('Upload error:', error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-40 h-11 bg-blue-400 text-[#ffffff]">
          Add Episode
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Episode Here</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill out the form to add your episode details.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col gap-4 p-4">
            {step === 1 && (
              <div className="flex flex-col">
                <div className="text-lg font-semibold flex flex-start ">
                  Upload Speaker Picture
                </div>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                  required
                />
                <label
                  htmlFor="fileInput"
                  className="px-6 py-2 bg-gray-0  h-72 text-white rounded-lg cursor-pointer font-semibold hover:bg-green-600 transition flex justify-center border-2 border-dotted border-blue-800 items-center hover:bg-blue-50"
                >
                  {selectedFile ? 'Change File' : 'Choose File'}
                </label>
                {selectedFile && (
                  <div className="text-sm text-red-800">
                    Selected File: {selectedFile.name}
                  </div>
                )}
                <div className="text-sm text-gray-700">{uploadStatus}</div>
              </div>
            )}

            {step === 2 && (
              <>
                <div>
                  <Label>Speaker Name</Label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter speaker name"
                    required
                  />
                </div>
                <div>
                  <Label>Speaker Position</Label>
                  <Input
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Enter position"
                    required
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <div className="flex gap-5 flex-col">
                <div>
                  <Label>Episode Title</Label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter episode title"
                    required
                  />
                </div>
                <div>
                  <Label>Duration (min)</Label>
                  <Input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Enter duration"
                    required
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    required
                  />
                </div>
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <div className="flex gap-9">
              <AlertDialogCancel type="button" onClick={clearInputs}>
                Cancel
              </AlertDialogCancel>
              {step > 1 && (
                <Button className="h-9" type="button" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button className="h-9" type="button" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button className="h-9" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
