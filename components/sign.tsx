import Link from 'next/link'

export default function Component() {
  return (
    <Link
      href="https://github.com/kekubhai"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
    >
      Made with{' '}
      <span className="text-red-500 mx-1" aria-label="love">
        ❤️
      </span>{' '}
      by <span className="text-blue-400 ml-1">Anirban</span>
    </Link>
  )
}