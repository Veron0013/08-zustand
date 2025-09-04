import { Tag } from "@/types/note"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type TaskValues = {
	title: string
	content: string
	tag: Tag
}

type TaskStore = {
	draft: TaskValues
	setDraft: (field: keyof TaskValues, value: string) => void
	clearText: () => void
}

const initialDraft = {
	title: "",
	content: "",
	tag: "Todo" as Tag,
}

export const useTaskStore = create<TaskStore>()(
	persist(
		(set) => ({
			draft: initialDraft,
			setDraft: (field, value) =>
				set((state) => ({
					draft: {
						...state.draft,
						[field]: value,
					},
				})),
			clearText: () =>
				set({
					draft: initialDraft,
				}),
		}),
		{
			name: "task-draft",
		}
	)
)
