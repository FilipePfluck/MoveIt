export default interface RefactoredUser {
    id: number
    name?: string | null;
    email?: string | null;
    image?: string | null;
    level?: number;
    xp?: number;
    challenges?: number;
}