"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calculator, Plus, Trash2, Home, Share2 } from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  name: string
  units: number
  grade: string
}

interface GradeScale {
  [key: string]: number
}

const gradeScales: { [key: string]: GradeScale } = {
  "4.0": {
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    F: 0.0,
  },
  "5.0": {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 2.0,
    E: 1.0,
    F: 0.0,
  },
  "7.0": {
    A: 7.0,
    B: 6.0,
    C: 5.0,
    D: 4.0,
    E: 3.0,
    F: 0.0,
  },
}

const gradeClassifications = {
  "4.0": [
    { min: 3.5, max: 4.0, class: "First Class", emoji: "🏆" },
    { min: 3.0, max: 3.49, class: "Second Class Upper", emoji: "🥈" },
    { min: 2.5, max: 2.99, class: "Second Class Lower", emoji: "🥉" },
    { min: 2.0, max: 2.49, class: "Third Class", emoji: "📜" },
    { min: 0.0, max: 1.99, class: "Fail", emoji: "❌" },
  ],
  "5.0": [
    { min: 4.5, max: 5.0, class: "First Class", emoji: "🏆" },
    { min: 3.5, max: 4.49, class: "Second Class Upper", emoji: "🥈" },
    { min: 2.5, max: 3.49, class: "Second Class Lower", emoji: "🥉" },
    { min: 1.5, max: 2.49, class: "Third Class", emoji: "📜" },
    { min: 0.0, max: 1.49, class: "Fail", emoji: "❌" },
  ],
  "7.0": [
    { min: 6.0, max: 7.0, class: "First Class", emoji: "🏆" },
    { min: 5.0, max: 5.99, class: "Second Class Upper", emoji: "🥈" },
    { min: 4.0, max: 4.99, class: "Second Class Lower", emoji: "🥉" },
    { min: 3.0, max: 3.99, class: "Third Class", emoji: "📜" },
    { min: 0.0, max: 2.99, class: "Fail", emoji: "❌" },
  ],
}

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([{ id: "1", name: "", units: 0, grade: "" }])
  const [scale, setScale] = useState<string>("5.0")
  const [gpa, setGPA] = useState<number | null>(null)
  const [classification, setClassification] = useState<string>("")

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: "",
      units: 0,
      grade: "",
    }
    setCourses([...courses, newCourse])
  }

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id))
    }
  }

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)))
  }

  const calculateGPA = () => {
    const validCourses = courses.filter(
      (course) => course.name.trim() !== "" && course.units > 0 && course.grade !== "",
    )

    if (validCourses.length === 0) {
      alert("Please add at least one valid course with name, units, and grade.")
      return
    }

    let totalPoints = 0
    let totalUnits = 0

    validCourses.forEach((course) => {
      const gradePoint = gradeScales[scale][course.grade] || 0
      totalPoints += gradePoint * course.units
      totalUnits += course.units
    })

    const calculatedGPA = totalPoints / totalUnits
    setGPA(calculatedGPA)

    // Determine classification
    const classifications = gradeClassifications[scale as keyof typeof gradeClassifications]
    const foundClass = classifications.find((cls) => calculatedGPA >= cls.min && calculatedGPA <= cls.max)
    setClassification(foundClass ? `${foundClass.class} ${foundClass.emoji}` : "")
  }

  const clearAll = () => {
    setCourses([{ id: "1", name: "", units: 0, grade: "" }])
    setGPA(null)
    setClassification("")
  }

  const shareResults = () => {
    if (gpa !== null) {
      const text = `I just calculated my GPA using SmartGPA.ng! 🎓\n\nMy GPA: ${gpa.toFixed(2)}/${scale}\nClassification: ${classification}\n\nCalculate yours at smartgpa.ng/gpa-calculator`
      if (navigator.share) {
        navigator.share({
          title: "My GPA Results - SmartGPA.ng",
          text: text,
          url: window.location.href,
        })
      } else {
        navigator.clipboard.writeText(text)
        alert("Results copied to clipboard!")
      }
    }
  }

  // Save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("smartgpa-courses")
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setCourses(parsed.courses || [{ id: "1", name: "", units: 0, grade: "" }])
        setScale(parsed.scale || "5.0")
      } catch (e) {
        console.log("Error loading saved data")
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("smartgpa-courses", JSON.stringify({ courses, scale }))
  }, [courses, scale])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SmartGPA.ng</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-green-100 text-green-800">🧮 Free GPA Calculator</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculate Your GPA Instantly</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your courses, units, and grades to calculate your GPA using Nigerian university grading systems. No
            login required - everything works instantly!
          </p>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Advertisement Space (728x90)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-green-600" />
                  GPA Calculator
                </CardTitle>
                <CardDescription>Add your courses and grades to calculate your GPA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Scale Selection */}
                <div>
                  <Label htmlFor="scale">Grading Scale</Label>
                  <Select value={scale} onValueChange={setScale}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select grading scale" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.0">4.0 Point Scale</SelectItem>
                      <SelectItem value="5.0">5.0 Point Scale (Most Nigerian Unis)</SelectItem>
                      <SelectItem value="7.0">7.0 Point Scale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Courses */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Courses</Label>
                    <Button onClick={addCourse} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Course
                    </Button>
                  </div>

                  {courses.map((course, index) => (
                    <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg">
                      <div className="md:col-span-5">
                        <Label htmlFor={`course-${course.id}`} className="text-sm">
                          Course Name
                        </Label>
                        <Input
                          id={`course-${course.id}`}
                          placeholder="e.g., Mathematics"
                          value={course.name}
                          onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor={`units-${course.id}`} className="text-sm">
                          Units
                        </Label>
                        <Input
                          id={`units-${course.id}`}
                          type="number"
                          min="1"
                          max="6"
                          placeholder="3"
                          value={course.units || ""}
                          onChange={(e) => updateCourse(course.id, "units", Number.parseInt(e.target.value) || 0)}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <Label htmlFor={`grade-${course.id}`} className="text-sm">
                          Grade
                        </Label>
                        <Select value={course.grade} onValueChange={(value) => updateCourse(course.id, "grade", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(gradeScales[scale]).map((grade) => (
                              <SelectItem key={grade} value={grade}>
                                {grade} ({gradeScales[scale][grade].toFixed(1)})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2 flex items-end">
                        <Button
                          onClick={() => removeCourse(course.id)}
                          size="sm"
                          variant="outline"
                          disabled={courses.length === 1}
                          className="w-full md:w-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={calculateGPA} className="bg-green-600 hover:bg-green-700 flex-1">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate GPA
                  </Button>
                  <Button onClick={clearAll} variant="outline" className="flex-1 bg-transparent">
                    Clear All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* GPA Result */}
            <Card>
              <CardHeader>
                <CardTitle>Your GPA</CardTitle>
              </CardHeader>
              <CardContent>
                {gpa !== null ? (
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-green-600">
                      {gpa.toFixed(2)}/{scale}
                    </div>
                    {classification && (
                      <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">{classification}</Badge>
                    )}
                    <div className="flex flex-col gap-2">
                      <Button onClick={shareResults} size="sm" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Results
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Add courses and click "Calculate GPA" to see your results</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Grade Scale Reference */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Grade Scale ({scale})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(gradeScales[scale]).map(([grade, points]) => (
                    <div key={grade} className="flex justify-between text-sm">
                      <span className="font-medium">{grade}</span>
                      <span>{points.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ad Space - Sidebar */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-500">Advertisement Space (300x250)</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How This Calculator Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">🔢 Pure friendly use</h4>
                <p className="text-gray-600">
                  All calculations happen in your browser. No information or login required - instant
                  results!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💾 Local Storage</h4>
                <p className="text-gray-600">
                  Your courses are saved locally in your browser. No account needed, your data stays private.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📱 Works Offline</h4>
                <p className="text-gray-600">
                  Once loaded, the calculator works completely offline. Perfect for areas with poor internet.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
