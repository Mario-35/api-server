/**
 * Helper functions for resolving GraphQL type names.
 *
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

export function assignType<T extends Record<string, unknown>>(type: string) {
  return (obj?: T | null): T | null | undefined => {
    if (obj) {
      Object.defineProperty(obj, "__type", {
        configurable: false,
        enumerable: false,
        value: type,
      });
    }
    return obj;
  };
}

export function getType(obj: unknown): string | undefined {
  return obj ? (obj as { __type: string }).__type : undefined;
}
