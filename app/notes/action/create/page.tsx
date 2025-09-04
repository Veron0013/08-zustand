import NoteFormPage from "@/components/NoteFormPage/NoteFormPage"
import css from "./page.module.css"

//type Props = {
//	params: Promise<{ id: string }>
//}
export const dynamic = "force-dynamic"
export async function generateMetadata() {
	return {
		title: `Note: create new note`,
		description: "new note creation",
		openGraph: {
			title: `Note: create new note`,
			description: "new note creation",
			url: `https://notehub.com/notes/action/create`,
			siteName: "NoteHub",
			images: [
				{
					url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
					width: 1200,
					height: 630,
					alt: "Note: create new note",
				},
			],
			type: "article",
		},
	}
}

export default function page() {
	return (
		<main className={css.main}>
			<div className={css.container}>
				<h1 className={css.title}>Create note</h1>
				<NoteFormPage />
			</div>
		</main>
	)
}
