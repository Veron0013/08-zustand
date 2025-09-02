import { createQueryParams, fetchNotes } from "@/lib/api"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import NotesClient from "./Notes.client"

type Props = {
	params: Promise<{ slug: string[] }>
}

const NotesByCategory = async ({ params }: Props) => {
	const { slug } = await params
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ["notesQuery", slug[0] || "All"],
		queryFn: () => fetchNotes(createQueryParams("", 1, slug[0] || "All")),
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NotesClient tag={slug[0]} />
		</HydrationBoundary>
	)
}

export default NotesByCategory
