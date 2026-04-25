
'use client';

// ...
import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice, State } from '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction ,isPending] = useActionState(createInvoice, initialState);
  console.log("state", state);
  return (
    <form action={formAction}>
      <div className="rounded-md bg-zinc-200 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose a customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-zinc-200 py-2 pl-10 text-sm outline-none 
             focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 
             bg-zinc-100  accent-emerald-700 appearance-none"

              defaultValue=""
            >
              <option value="" disabled className=" bg-zinc-300">
                Select a customer
              </option>
              {customers.map((customer) => (
                <option
                  key={customer.id}
                  value={customer.id}
                  className="bg-zinc-300 hover:bg-zinc-400py-2" // Background works, hover does NOT
                >
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-xs text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                aria-describedby="amount-error"
                className="peer block w-full rounded-md border border-zinc-200 bg-zinc-100 py-2 pl-10 text-sm outline-2 placeholder:text-zinc-500 outline-none 
             focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 "
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500 peer-focus:text-zinc-900" />
            </div>
          </div>
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-xs text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset >
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-zinc-200 bg-zinc-100 px-[14px] py-1.5">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"

                  className="h-4 w-4 cursor-pointer border-zinc-300 bg-zinc-200 text-zinc-600  outline-none border-none checked:text-emerald-900 focus:ring-0"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-zinc-300 bg-zinc-200 text-zinc-600  outline-none border-none checked:text-emerald-900 focus:ring-0"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-emerald-900 px-3 py-1.5 text-xs font-medium text-emerald-50"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors?.status.map((error: string) => (
                <p className="mt-2 text-xs text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-zinc-300 px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200"
        >
          Cancel
        </Link>
        <Button type="submit" disabled={isPending} className='bg-emerald-900 text-emerald-50 hover:bg-emerald-800  disabled:bg-emerald-300 disabled:text-emerald-100 '>{isPending?
        <svg className='w-4 h-4 animate-spin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"></path></svg>
        :"Create Invoice"}</Button>
      </div>
    </form>
  );
}
