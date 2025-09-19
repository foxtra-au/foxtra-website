import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Upload, File, X } from 'lucide-react'
import Image from 'next/image'

interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
  onFilesSelected?: (files: File[]) => void
  onFileRemove?: (file: File) => void
  className?: string
  disabled?: boolean
}

interface FileWithPreview extends File {
  id: string
  preview?: string
}

export function FileUpload({
  accept = '*/*',
  multiple = false,
  maxSize = 10,
  onFilesSelected,
  onFileRemove,
  className = '',
  disabled = false
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return

    const fileArray = Array.from(newFiles)
    const validFiles = fileArray.filter(file => {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`)
        return false
      }
      return true
    })

    const filesWithPreview = validFiles.map(file => {
      const fileWithPreview = file as FileWithPreview
      fileWithPreview.id = Math.random().toString(36).substr(2, 9)
      
      if (file.type.startsWith('image/')) {
        fileWithPreview.preview = URL.createObjectURL(file)
      }
      
      return fileWithPreview
    })

    setFiles(prev => multiple ? [...prev, ...filesWithPreview] : filesWithPreview)
    onFilesSelected?.(filesWithPreview)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (disabled) return
    
    handleFiles(e.dataTransfer.files)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
  }

  const removeFile = (fileToRemove: FileWithPreview) => {
    setFiles(prev => prev.filter(file => file.id !== fileToRemove.id))
    onFileRemove?.(fileToRemove)
    
    if (fileToRemove.preview) {
      URL.revokeObjectURL(fileToRemove.preview)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Upload Area */}
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
          dragActive
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-gray-400',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />
        
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">
            Drop files here or click to upload
          </p>
          <p className="text-sm text-gray-500">
            Maximum file size: {maxSize}MB
          </p>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                {file.preview ? (
                  <div className="relative h-10 w-10 rounded overflow-hidden">
                    <Image
                      src={file.preview}
                      alt={file.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <File className="h-10 w-10 text-gray-400" />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFile(file)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
