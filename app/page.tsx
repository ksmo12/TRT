import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, BookOpen, Lightbulb, Star, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
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
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">
                Reviews
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">🇳🇬 Made for Nigerian Students</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smarter way to track your <span className="text-green-600">academic success</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Free GPA calculator, WAEC & JAMB past questions, and study tips - everything you need to excel in your
            academics, no wahala!
          </p>

          {/* Ad Space - Top Banner */}
          <div className="mb-8">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">Advertisement Space (728x90)</p>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/gpa-calculator">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
              >
                <Calculator className="w-5 h-5 mr-2" />
                GPA Calculator
              </Button>
            </Link>
            <Link href="/past-questions">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                WAEC/JAMB Past Questions
              </Button>
            </Link>
            <Link href="/study-tips">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent w-full sm:w-auto"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Study Hacks
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">50,000+</div>
              <div className="text-gray-600 text-sm md:text-base">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600 text-sm md:text-base">Free to Use</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 text-sm md:text-base">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Designed specifically for Nigerian students, by Nigerian students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Free GPA Calculator</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Calculate your GPA instantly using Nigerian grading systems (4.0, 5.0, 7.0 scales)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Works offline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    No registration required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Save & share results
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">WAEC & JAMB Past Questions</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Access thousands of past questions with detailed solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    10+ years of questions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Detailed explanations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Practice mode
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Study Hacks & Tips</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Proven study techniques that work for Nigerian students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Time management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Exam strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Memory techniques
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How GPA Calculator Works */}
      <section id="how-it-works" className="py-12 md:py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our GPA Calculator Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Simple, fast, and accurate - no registration required!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🚀 Lightning Fast & Reliable</h3>
                <p className="text-blue-800 text-sm md:text-base">
                  Our GPA calculator works instantly in your browser. No waiting, no loading - just enter your grades
                  and get results immediately!
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Enter Your Courses</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Add course names, credit units, and grades. Works with all Nigerian university grading systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Choose Your Scale</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Select from 4.0, 5.0, or 7.0 point scales depending on your institution's system.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Get Instant Results</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Your GPA is calculated automatically using the standard formula: Total Grade Points ÷ Total Credit
                    Units.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">✨ Why Students Love SmartGPA:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Results appear as you type</li>
                  <li>• Automatically saves your progress</li>
                  <li>• Works on any device - phone, tablet, laptop</li>
                  <li>• No internet needed after first visit</li>
                  <li>• Share results with friends and family</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-green-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">🧮 Sample Calculation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-700 border-b pb-2">
                  <div>Course</div>
                  <div>Units</div>
                  <div>Grade</div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>Mathematics</div>
                    <div>3</div>
                    <div>A (5.0)</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>English</div>
                    <div>2</div>
                    <div>B (4.0)</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>Physics</div>
                    <div>4</div>
                    <div>A (5.0)</div>
                  </div>
                </div>
                <div className="border-t pt-4 bg-green-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Calculation:</div>
                    <div className="text-xs text-gray-500 mb-3">(3×5.0 + 2×4.0 + 4×5.0) ÷ (3+2+4) = 43 ÷ 9</div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Your GPA:</span>
                      <span className="text-2xl font-bold text-green-600">4.8/5.0</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">First Class! 🏆</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/gpa-calculator">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Try the Calculator Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Students Are Saying</h2>
            <p className="text-lg md:text-xl text-gray-600">Real feedback from Nigerian students across the country</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "This GPA calculator saved my life! I was so confused about my CGPA calculation, but SmartGPA made it
                  so easy. The JAMB past questions are also fire! 🔥"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Adaora O.</div>
                    <div className="text-xs md:text-sm text-gray-500">University of Lagos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "Mehn, I wish I found this site earlier! The study tips are so practical and the WAEC past questions
                  helped me prepare well. No cap, this site is legit!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Kemi A.</div>
                    <div className="text-xs md:text-sm text-gray-500">Covenant University</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "As a final year student, tracking my CGPA was stressful. SmartGPA made it simple and I even graduated
                  with First Class! Thank you guys! 🎓"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Chidi M.</div>
                    <div className="text-xs md:text-sm text-gray-500">University of Ibadan</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ad Space - Middle Banner */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-8 text-center">
              <p className="text-sm text-gray-500">Advertisement Space (728x90)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to boost your academic success?
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-8">
            Join thousands of Nigerian students already using SmartGPA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gpa-calculator">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Start Calculating Now
              </Button>
            </Link>
            <Link href="/past-questions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-green-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Past Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SmartGPA.ng</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md text-sm md:text-base">
                Empowering Nigerian students with free tools and resources to excel academically. Made with ❤️ for the
                Nigerian student community.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">📧</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">🐦</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/advertise" className="hover:text-white transition-colors">
                    Advertise
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/gpa-calculator" className="hover:text-white transition-colors">
                    GPA Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/past-questions" className="hover:text-white transition-colors">
                    WAEC Past Questions
                  </Link>
                </li>
                <li>
                  <Link href="/past-questions" className="hover:text-white transition-colors">
                    JAMB Past Questions
                  </Link>
                </li>
                <li>
                  <Link href="/study-tips" className="hover:text-white transition-colors">
                    Study Tips
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 SmartGPA.ng. Made with 💚 for Nigerian students.</p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Created by{" "}
                <a href="/creator" className="text-green-400 hover:text-green-300">
                  The Creator
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Ad Space */}
          <div className="mt-6 md:mt-8">
            <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
              <p className="text-xs text-gray-500">Advertisement Space (728x90)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
