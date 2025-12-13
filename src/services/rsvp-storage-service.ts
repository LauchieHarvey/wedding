export class RsvpStorageService {
  private static STORAGE_KEY = "rsvp-ids";

  public static getRsvpIds(): string[] {
    const json = localStorage.getItem(this.STORAGE_KEY);

    if (!json) return [];

    try {
      return JSON.parse(json) as string[];
    } catch {
      console.error("error parsing rsvp ids from local storage");
      return [];
    }
  }

  public static addRsvpId(id: string): string[] {
    const rsvpIds = this.getRsvpIds();

    rsvpIds.push(id);

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(rsvpIds));
    } catch (error) {
      console.error("Failed to set id to local storage");
    }

    return rsvpIds;
  }
}
