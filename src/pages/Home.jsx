import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Welcome to the Captain's log Website
			</h1>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				Welcome to Captain's Log! Explore, add, edit, and manage logs from
				legendary captains like Picard, Ahab, and Sarah Lance. Dive into their
				unique experiences, track crises, and view individual posts. Join us in
				navigating their remarkable journeys and contribute your own stories to
				the archive.
			</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
				<Link
					to="/logs/new"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Create Log
				</Link>
				<Link
					to="/logs"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					View Logs <span aria-hidden="true">→</span>
				</Link>
			</div>
		</div>
	);
}
