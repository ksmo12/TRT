import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calculator, Home, Download, Search, BookOpen, FileText, Clock, Star } from "lucide-react"
import Link from "next/link"

const pastQuestions = [
  {
    id: 1,
    title: "WAEC Mathematics 2020",
    subject: "Mathematics",
    exam: "WAEC",
    year: "2020",
    type: "Theory & Objective",
    downloads: "15,234",
    rating: 4.8,
    file: "/past-questions/waec-maths-2020.pdf",
    description: "Complete WAEC Mathematics questions with detailed solutions and marking scheme.",
  },
  {
    id: 2,
    title: "JAMB English Language 2022",
    subject: "English",
    exam: "JAMB",
    year: "2022",
    type: "CBT Format",
    downloads: "23,456",
    rating: 4.9,
    file: "/past-questions/jamb-english-2022.pdf",
    description: "JAMB English Language past questions in CBT format with comprehensive answers.",
  },
  {
    id: 3,
    title: "WAEC Biology 2019",
    subject: "Biology",
    exam: "WAEC",
    year: "2019",
    type: "Theory & Practical",
    downloads: "12,890",
    rating: 4.7,
    file: "/past-questions/waec-biology-2019.pdf",
    description: "WAEC Biology questions covering all topics with detailed explanations and diagrams.",
  },
  {
    id: 4,
    title: "JAMB Mathematics 2023",
    subject: "Mathematics",
    exam: "JAMB",
    year: "2023",
    type: "CBT Format",
    downloads: "28,901",
    rating: 4.9,
    file: "/past-questions/jamb-maths-2023.pdf",
    description: "Latest JAMB Mathematics questions with step-by-step solutions.",
  },
  {
    id: 5,
    title: "WAEC Chemistry 2021",
    subject: "Chemistry",
    exam: "WAEC",
    year: "2021",
    type: "Theory & Practical",
    downloads: "9,876",
    rating: 4.6,
    file: "/past-questions/waec-chemistry-2021.pdf",
    description: "WAEC Chemistry past questions with chemical equations and practical experiments.",
  },
  {
    id: 6,
    title: "JAMB Physics 2022",
    subject: "Physics",
    exam: "JAMB",
    year: "2022",
    type: "CBT Format",
    downloads: "18,543",
    rating: 4.8,
    file: "/past-questions/jamb-physics-2022.pdf",
    description: "JAMB Physics questions covering mechanics, waves, electricity, and modern physics.",
  },
]

export default function PastQuestionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-800">📚 Free Past Questions</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WAEC & JAMB Past Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download free WAEC and JAMB past questions with detailed solutions. Practice with real exam questions to
            boost your performance and confidence!
          </p>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Advertisement Space (728x90)</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Search by subject, year, or exam type..." className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    WAEC
                  </Button>
                  <Button variant="outline" size="sm">
                    JAMB
                  </Button>
                  <Button variant="outline" size="sm">
                    2023
                  </Button>
                  <Button variant="outline" size="sm">
                    Mathematics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Past Questions</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">50,000+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-600">Subjects</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">10+</div>
            <div className="text-sm text-gray-600">Years Covered</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastQuestions.map((question) => (
                <Card key={question.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        className={
                          question.exam === "WAEC" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                        }
                      >
                        {question.exam} {question.year}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {question.rating}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{question.title}</CardTitle>
                    <CardDescription>{question.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subject:</span>
                        <span className="font-medium">{question.subject}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{question.type}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Downloads:</span>
                        <span className="font-medium text-green-600">{question.downloads}</span>
                      </div>

                      <div className="pt-3 border-t">
                        <a href={question.file} download className="w-full">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Questions
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Subjects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🔥 Popular Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Mathematics", count: "45 questions" },
                    { name: "English Language", count: "38 questions" },
                    { name: "Physics", count: "32 questions" },
                    { name: "Chemistry", count: "29 questions" },
                    { name: "Biology", count: "26 questions" },
                    { name: "Economics", count: "23 questions" },
                  ].map((subject, index) => (
                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm font-medium">{subject.name}</span>
                      <span className="text-xs text-gray-500">{subject.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💡 Study Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Practice under timed conditions</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Review solutions carefully</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Focus on weak areas</span>
                  </li>
                </ul>
                <Link href="/study-tips" className="block mt-4">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    More Study Tips
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🛠️ Helpful Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/gpa-calculator">
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                    <Calculator className="w-4 h-4 mr-2" />
                    GPA Calculator
                  </Button>
                </Link>
                <Link href="/study-tips">
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Study Hacks
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ad Space - Sidebar */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-500">Advertisement Space (300x250)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
