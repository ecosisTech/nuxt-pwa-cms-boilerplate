export default function slugify(input: string) {
  return input
    .toString() // Ensure it's a string
    .toLowerCase() // Convert to lowercase
    .trim() // Trim leading and trailing spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters (except hyphens)
    .replace(/-+/g, '-'); // Remove consecutive hyphens
}
