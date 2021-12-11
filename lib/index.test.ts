import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { name } from "./index.ts";

Deno.test(`dummy test`, () => {
  assertEquals(name, "genny");
});
