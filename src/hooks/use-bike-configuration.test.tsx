import { describe, it, expect } from "vitest";
import useBikeConfiguration from "./use-bike-configuration";
import { Product } from "@/schemas/product-schema";
import { act, renderHook, waitFor } from "@testing-library/react";

const partProducts: Product[] = [
  {
    uid: "1",
    title: "Frame Type 1",
    description: "Description for Frame Type 1",
    price: 100,
    inStock: 10,
    category: "custom",
    slug: "frame-type-1",
    type: "frameType",
  },
  {
    uid: "2",
    title: "Frame Finish 1",
    description: "Description for Frame Finish 1",
    price: 50,
    inStock: 5,
    category: "custom",
    slug: "frame-finish-1",
    type: "frameFinish",
  },
  {
    uid: "3",
    title: "Wheel 1",
    description: "Description for Wheel 1",
    price: 200,
    inStock: 8,
    category: "custom",
    slug: "wheel-1",
    type: "wheel",
  },
  {
    uid: "4",
    title: "Rim 1",
    description: "Description for Rim 1",
    price: 75,
    inStock: 12,
    category: "custom",
    slug: "rim-1",
    type: "rim",
  },
  {
    uid: "5",
    title: "Chain 1",
    description: "Description for Chain 1",
    price: 30,
    inStock: 15,
    category: "custom",
    slug: "chain-1",
    type: "chain",
  },
];

describe("useBikeConfiguration hook", () => {
  it("initializes with default values", () => {
    const { result } = renderHook(() => useBikeConfiguration(partProducts));
    expect(result.current.currentStep).toBe(0);
    expect(result.current.selectedParts).toEqual({
      chain: "",
      frameFinish: "",
      frameType: "",
      rim: "",
      wheel: "",
    });
  });

  it("handles next step", () => {
    const { result } = renderHook(() => useBikeConfiguration(partProducts));
    act(() => {
      result.current.handleNext();
    });
    expect(result.current.currentStep).toBe(1);
  });

  it("handles previous step", async () => {
    const { result } = renderHook(() => useBikeConfiguration(partProducts));
    act(() => {
      result.current.handleNext();
    });
    await waitFor(() => {
      expect(result.current.currentStep).toBe(1);
    });
    act(() => {
      result.current.handlePrevious();
    });
    await waitFor(() => {
      expect(result.current.currentStep).toBe(0);
    });
  });

  it("selects a part", () => {
    const { result } = renderHook(() => useBikeConfiguration(partProducts));
    act(() => {
      result.current.handlePartSelection("frameType", "1");
    });
    expect(result.current.selectedParts.frameType).toBe("1");
  });

  it("checks if a part is available", () => {
    const { result } = renderHook(() => useBikeConfiguration(partProducts));
    const isAvailable = result.current.checkIsAvailablePart("1");
    expect(isAvailable).toBe(true);
  });

  it("checks if a part is selected", () => {
    const { result } = renderHook(() => useBikeConfiguration(partProducts));
    act(() => {
      result.current.handlePartSelection("frameType", "1");
    });
    const isSelected = result.current.isSelectedPart("1", "frameType");
    expect(isSelected).toBe(true);
  });
});
