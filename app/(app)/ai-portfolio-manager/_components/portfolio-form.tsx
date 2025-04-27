"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UiIcons } from "@/lib/icons";
import { tokens, Tokens } from "@/types/tokens";
import { CircleDollarSign, HandCoins, Percent, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

export const PortfolioFormSchema = z.object({
  riskProfile: z.enum(["Conservative", "Moderate", "Aggressive"], {
    required_error: "Select a risk profile",
  }),
  targetApy: z.enum(["Low", "Moderate", "High"], {
    required_error: "Select a target APY",
  }),
  capitalAmount: z
    .number({
      required_error: "Enter capital amount",
      invalid_type_error: "Capital must be a number",
    })
    .min(100, { message: "Minimum capital is $100" }),
  lockPeriod: z.enum(["1 day", "7 days", "14 days"], {
    required_error: "Select a lock period",
  }),
  tokenPreferences: z
    .array(
      z.enum(Object.values(Tokens) as [string, ...string[]], {
        required_error: "Select at least one token",
      })
    )
    .min(1, { message: "Select at least one token" }),
});

export type FormValues = z.infer<typeof PortfolioFormSchema>;

interface PortfolioFormProps {
  onSubmit(values: FormValues): void;
}

export function PortfolioForm({ onSubmit }: PortfolioFormProps) {
  // 1. Define your form.
  const form = useForm<FormValues>({
    resolver: zodResolver(PortfolioFormSchema),
    defaultValues: {
      riskProfile: undefined,
      targetApy: undefined,
      capitalAmount: 0,
      lockPeriod: undefined,
      tokenPreferences: [],
    },
  });

  const selectedTokens = form.watch("tokenPreferences");

  const toggleToken = (token: Tokens) => {
    const current = form.getValues("tokenPreferences") || [];
    if (current.includes(token)) {
      form.setValue(
        "tokenPreferences",
        current.filter((t) => t !== token)
      );
    } else {
      form.setValue("tokenPreferences", [...current, token]);
    }
  };

  return (
    <div className="rounded-2xl w-xl bg-[url('/blue-bg.jpeg')] bg-bottom-right">
      <div className="px-6 py-3">
        <div className="text-accent text-md font-medium">
          Please complete this form to create your portfolio
        </div>
      </div>
      <div className="py-3 px-6 bg-white rounded-b-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="riskProfile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5 text-[#363F72]">
                    <UiIcons.sliders width={18} height={18} />
                    <p className="text-sm font-medium">
                      Risk Profile (Max Drawdown)
                    </p>
                  </FormLabel>
                  <FormControl className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select risk profile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Conservative">
                          Low (max 5%)
                        </SelectItem>
                        <SelectItem value="Moderate">
                          Moderate (max 15%)
                        </SelectItem>
                        <SelectItem value="Aggressive">
                          High (max 30%)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetApy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5 text-[#363F72]">
                    <Percent size={18} />
                    <p className="text-sm font-medium">Target APY</p>
                  </FormLabel>
                  <FormControl className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select risk profile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">{"<"}10% (Low)</SelectItem>
                        <SelectItem value="Moderate">
                          10-20% (Moderate)
                        </SelectItem>
                        <SelectItem value="High">{">"}20% (High)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="capitalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5 text-[#363F72]">
                    <CircleDollarSign size={18} />
                    <p className="text-sm font-medium">Capital Amount</p>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="number"
                        placeholder="0"
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                        className="pr-12 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        USD
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lockPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5 text-[#363F72]">
                    <Timer size={18} />
                    <p className="text-sm font-medium">Lock Period</p>
                  </FormLabel>
                  <FormControl className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select risk profile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1 day">1 day</SelectItem>
                        <SelectItem value="7 days">7 days</SelectItem>
                        <SelectItem value="14 days">14 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tokenPreferences"
              render={() => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1.5 text-[#363F72]">
                    <HandCoins size={18} />
                    <p className="text-sm font-medium">Token Prefernces</p>
                  </FormLabel>
                  <div className="flex gap-2 flex-wrap">
                    {tokens.map((token) => (
                      <Button
                        key={token}
                        type="button"
                        variant="outline"
                        onClick={() => toggleToken(token as Tokens)}
                        className={cn(
                          "rounded-full px-4 cursor-pointer",
                          selectedTokens.includes(token as Tokens)
                            ? "border border-gray-700"
                            : ""
                        )}
                      >
                        {token}
                      </Button>
                    ))}
                  </div>
                  <FormMessage />
                  <FormDescription className="text-[#717BBC] text-sm">
                    Select one or more tokens you want to invest in
                  </FormDescription>
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Button className="w-full bg-[#363F72] rounded-4xl" type="submit">
                Generate Portfolio Strategy
              </Button>
              <p className="text-[#717BBC] text-sm">
                Your preferences will be used to create an AI-generated
                portfolio optimized for current market conditions.
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
