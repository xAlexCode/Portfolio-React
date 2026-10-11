

type ProjectFilterProps = { 
    tags: string[],
    selectedTags: string[],
    onToggle: (tag: string) => void,
    onClear: () => void
}

const ProjectFilter = ({ tags, selectedTags, onToggle, onClear }: ProjectFilterProps) => {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onToggle(tag)}
                    className={`rounded-full border px-4 py-1 ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : ""}`}
                >
                    {tag}
                </button>
            ))}
            <button 
                onClick={onClear}
                className="rounded-full border px-4 py-1"
            >
                Clear
            </button>
        </div>
    )
}

export default ProjectFilter
