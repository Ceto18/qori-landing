"use client";

import { Skeleton } from "antd";

export function CheckoutLoading() {
    return (
        <main className="min-h-screen bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10">
                    <Skeleton.Input active size="small" className="!w-32" />

                    <div className="mt-5">
                        <Skeleton.Input active size="large" className="!h-12 !w-full max-w-xl" />
                    </div>

                    <div className="mt-4">
                        <Skeleton.Input active size="default" className="!w-full max-w-2xl" />
                    </div>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
                    <section className="space-y-8">
                        <div className="glass-dark rounded-2xl border border-primary/20 p-8">
                            <Skeleton active paragraph={{ rows: 6 }} />
                        </div>

                        <div className="glass-dark rounded-2xl border border-primary/20 p-8">
                            <Skeleton active paragraph={{ rows: 5 }} />
                        </div>
                    </section>

                    <aside className="glass-dark rounded-2xl border border-primary/20 p-8">
                        <Skeleton active paragraph={{ rows: 8 }} />
                    </aside>
                </div>
            </div>
        </main>
    );
}