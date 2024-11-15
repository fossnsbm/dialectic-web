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
import { useEffect, useState, useCallback } from 'react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/components/ui/input'

export default function SignUpDialog({ id }: { id: string }) {
  const [step, setStep] = useState(1)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState('')
  const [loading, setLoading] = useState(false)
  interface EpisodeData {
    speakerImage: string
    speakerName: string
    speakerPosition: string
    episodeTitle: string
    episodeDate: string
    episodeDuration: string
    episodeDescription: string
    youtubecode: string
  }

  const [episodeData, setEpisodeData] = useState<EpisodeData>({
    speakerImage: '',
    speakerName: '',
    speakerPosition: '',
    episodeTitle: '',
    episodeDate: '',
    episodeDuration: '',
    episodeDescription: '',
    youtubecode: '',
  })
  const [formData, setFormData] = useState({
    title: '',
    speakerposition: '',
    duration: '',
    describe: '',
    speakername: '',
    youtubecode: '',
  })
  const _id = id

  const fetchEpisodeData = useCallback(async () => {
    try {
      const response = await fetch('/api/episode/fetchepisode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: id }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch episode data')
      }

      const data = await response.json()

      setFormData({
        title: data.title || '',
        speakerposition: data.speakerposition || '',
        duration: data.duration || '',
        describe: data.describe || '',
        speakername: data.speakername || '',
        youtubecode: data.youtubecode || '',
      })
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('An unknown error occurred')
      }
    }
  }, [id])

  useEffect(() => {
    fetchEpisodeData()
  }, [fetchEpisodeData])
  const clearInputs = () => {
    setFormData({
      title: '',
      speakerposition: '',
      duration: '',
      describe: '',
      speakername: '',
      youtubecode: '',
    })
    setSelectedFile(null)
    setUploadStatus('')
    setStep(1)
    fetchEpisodeData() // Now accessible here
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
    setLoading(true)

    const {
      title,
      speakerposition,
      duration,
      describe,
      speakername,
      youtubecode,
    } = formData

    try {
      const response = await fetch('/api/card/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          speakerposition,
          duration,
          describe,
          speakername,
          youtubecode,
          _id,
        }),
      })

      if (response.ok) {
        clearInputs()
        setLoading(false)
        window.location.reload()
      } else {
        alert('Failed to Update episode!')
        setLoading(false)
      }
    } catch (error) {
      console.error('Error updating episode:', error)
      alert('An error occurred while updating the episode.')
      setLoading(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'white-outline-2'} className="gap-2">
          Edit Episode
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Episode Here</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill out the form to add your episode details.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col gap-4 p-4">
            {step === 1 && (
              <>
                <div>
                  <Label>Speaker Name</Label>
                  <Input
                    name="speakername"
                    value={formData.speakername}
                    onChange={handleChange}
                    placeholder="Enter speaker name"
                    required
                  />
                </div>
                <div>
                  <Label>Speaker Position</Label>
                  <Input
                    name="speakerposition"
                    value={formData.speakerposition}
                    onChange={handleChange}
                    placeholder="Enter position"
                    required
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
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
                      name="describe"
                      value={formData.describe}
                      onChange={handleChange}
                      placeholder="Enter description"
                      required
                    />
                  </div>
                  <div>
                    <Label>Youtubecode</Label>
                    <Input
                      name="youtubecode"
                      value={formData.youtubecode}
                      onChange={handleChange}
                      placeholder="Enter code"
                      required
                    />
                  </div>
                </div>
              </>
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
                  {loading ? 'Updating...' : 'Update Episode detail'}
                </Button>
              )}
            </div>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
