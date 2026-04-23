import { useState } from 'react'
import Link from 'next/link'

export default function SubmitAgent() {
  const [formData, setFormData] = useState({
    name: '',
    builder: '',
    description: '',
    category: '',
    pricing: '',
    website: '',
    github: '',
    twitter: '',
    slug: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Thanks!</h1>
          <p>Your agent submission has been received. We&apos;ll review and list it soon.</p>
          <Link href="/" className="btn-primary mt-4 inline-block">
            Back to Marketplace
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/" className="text-[#00d9ff] mb-8 inline-block">&larr; Back to Marketplace</Link>
        <h1 className="text-3xl font-bold text-center mb-8">List Your AI Agent</h1>
        <p className="text-gray-400 text-center mb-12">Free listing for the first 50 agents. Takes 5 minutes.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Agent Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Builder Name</label>
            <input
              type="text"
              name="builder"
              value={formData.builder}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description (2-3 sentences)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              >
                <option value="">Select...</option>
                <option value="Productivity">Productivity</option>
                <option value="Business">Business</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
                <option value="Finance">Finance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pricing (e.g. $29/mo)</label>
              <input
                type="text"
                name="pricing"
                value={formData.pricing}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">GitHub</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Twitter</label>
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Suggested Slug (for URL)</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="e.g. my-cool-agent"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00d9ff] text-black font-bold py-3 rounded-lg hover:bg-blue-400 transition"
          >
            Submit Agent
          </button>
        </form>
      </div>
    </div>
  )
}