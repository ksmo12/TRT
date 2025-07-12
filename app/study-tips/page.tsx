import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Home, Clock, Brain, Target, BookOpen, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function StudyTipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
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
          <Badge className="mb-4 bg-yellow-100 text-yellow-800">💡 Study Smart, Not Hard</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Study Hacks for Nigerian Students</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proven study techniques that work for WAEC, JAMB, and university exams. These tips have helped thousands of
            Nigerian students achieve academic success!
          </p>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Advertisement Space (728x90)</p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <a
            href="#time-management"
            className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Time Management</span>
          </a>
          <a
            href="#memory-techniques"
            className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Memory Tricks</span>
          </a>
          <a
            href="#exam-strategies"
            className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Exam Strategies</span>
          </a>
          <a
            href="#study-groups"
            className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium">Study Groups</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Time Management */}
            <section id="time-management">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    Time Management Hacks
                  </CardTitle>
                  <CardDescription>Master your time to maximize your results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">🍅 The Pomodoro Technique (Nigerian Style)</h4>
                    <p className="text-blue-800 text-sm mb-3">
                      Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer break (15-30
                      minutes).
                    </p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 25 min: Mathematics past questions</li>
                      <li>• 5 min break: Stretch, drink water</li>
                      <li>• 25 min: English comprehension</li>
                      <li>• 5 min break: Quick snack</li>
                      <li>• Repeat for maximum focus!</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">📅 Daily Study Schedule</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>6:00 AM - Mathematics (1 hour)</li>
                        <li>7:30 AM - Breakfast & prep for school</li>
                        <li>4:00 PM - English (45 minutes)</li>
                        <li>6:00 PM - Science subjects (1 hour)</li>
                        <li>8:00 PM - Review & past questions</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">⚡ Quick Study Tips</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Study hardest subjects when fresh</li>
                        <li>• Use phone apps to block distractions</li>
                        <li>• Set specific goals for each session</li>
                        <li>• Reward yourself after achieving goals</li>
                        <li>• Track your progress daily</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Memory Techniques */}
            <section id="memory-techniques">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-6 h-6 text-purple-600 mr-2" />
                    Memory Techniques That Work
                  </CardTitle>
                  <CardDescription>Remember more with these proven methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">🧠 The LOCI Method (Memory Palace)</h4>
                    <p className="text-purple-800 text-sm mb-3">
                      Associate information with familiar places in your home or school. Walk through these places
                      mentally to recall information.
                    </p>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-sm">
                        <strong>Example:</strong> To remember the periodic table:
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• Front door = Hydrogen (H)</li>
                        <li>• Living room = Helium (He)</li>
                        <li>• Kitchen = Lithium (Li)</li>
                        <li>• Your bedroom = Beryllium (Be)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">🎵 Acronyms & Songs</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>
                          <strong>BODMAS:</strong> Brackets, Orders, Division, Multiplication, Addition, Subtraction
                        </li>
                        <li>
                          <strong>Roy G. Biv:</strong> Colors of rainbow (Red, Orange, Yellow, Green, Blue, Indigo,
                          Violet)
                        </li>
                        <li>Create songs for formulas and facts</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">🔄 Spaced Repetition</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Review after 1 day</li>
                        <li>• Review after 3 days</li>
                        <li>• Review after 1 week</li>
                        <li>• Review after 2 weeks</li>
                        <li>• Review after 1 month</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Exam Strategies */}
            <section id="exam-strategies">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-6 h-6 text-red-600 mr-2" />
                    WAEC & JAMB Exam Strategies
                  </CardTitle>
                  <CardDescription>Proven techniques for Nigerian exams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">📝 WAEC Strategy</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Read questions twice before answering</li>
                        <li>• Start with questions you know best</li>
                        <li>• Allocate time per question (e.g., 2 min each)</li>
                        <li>• Show all working in Mathematics</li>
                        <li>• Write clearly and legibly</li>
                        <li>• Review answers if time permits</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">⚡ JAMB Strategy</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Practice CBT format regularly</li>
                        <li>• Eliminate wrong options first</li>
                        <li>• Don't spend too long on one question</li>
                        <li>• Use educated guessing when stuck</li>
                        <li>• Manage your 2 hours wisely</li>
                        <li>• Stay calm and focused</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">🎯 The Night Before Exam</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                      <div>
                        <h5 className="font-medium text-sm mb-1">✅ DO:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Review key formulas</li>
                          <li>• Get 7-8 hours sleep</li>
                          <li>• Prepare exam materials</li>
                          <li>• Eat light, healthy dinner</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-1">❌ DON'T:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Study new topics</li>
                          <li>• Stay up all night</li>
                          <li>• Panic or overthink</li>
                          <li>• Eat heavy meals</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-1">📋 Pack:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Exam slip/admission</li>
                          <li>• Pens, pencils, eraser</li>
                          <li>• Calculator (if allowed)</li>
                          <li>• Water bottle</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Study Groups */}
            <section id="study-groups">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 text-green-600 mr-2" />
                    Effective Study Groups
                  </CardTitle>
                  <CardDescription>Learn together, succeed together</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">👥 How to Form a Great Study Group</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div>
                        <h5 className="font-medium text-sm mb-2">Group Size & Composition:</h5>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• 3-5 students maximum</li>
                          <li>• Mix of strong and average students</li>
                          <li>• Similar commitment levels</li>
                          <li>• Different subject strengths</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-2">Meeting Structure:</h5>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Set regular meeting times</li>
                          <li>• Rotate leadership roles</li>
                          <li>• Prepare agenda beforehand</li>
                          <li>• Focus on problem-solving</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">📱 Online Study Group Tools</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h6 className="font-medium text-sm">WhatsApp Groups</h6>
                        <p className="text-xs text-gray-600">Share notes, ask questions, schedule meetings</p>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Google Meet/Zoom</h6>
                        <p className="text-xs text-gray-600">Virtual study sessions and discussions</p>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Google Drive</h6>
                        <p className="text-xs text-gray-600">Share documents, notes, and resources</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💡 Quick Study Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Study in a quiet, well-lit environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Take regular breaks to avoid burnout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Practice past questions regularly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Teach others to reinforce your learning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Stay hydrated and eat brain foods</span>
                  </li>
                </ul>
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
                <Link href="/past-questions">
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Past Questions
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
