import { DollarSign, GitGraph, PieChart, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link href="#" className="flex items-center justify-center" prefetch={false}>
					<DollarSign className="h-6 w-6" />
					<span className="sr-only">Fintech App</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
						Features
					</Link>
					<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
						Pricing
					</Link>
					<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
						About
					</Link>
					<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Take Control of Your Finances
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										Our finance app helps you track your spending, manage your budget, and reach your financial goals.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link
										href="/login"
										className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Get Started
									</Link>
									<Link
										href="#"
										className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Learn More
									</Link>
								</div>
							</div>
							<Image
								src="/public/img.jpg"
								width="550"
								height="550"
								alt="Hero"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted justify-center flex">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Tools to Manage Your Money</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our finance app offers a suite of features to help you take control of your finances and reach your
									financial goals.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<PieChart className="h-10 w-10 text-primary" />
								<h3 className="text-xl font-bold">Budgeting</h3>
								<p className="text-muted-foreground">
									Create and track your monthly budget to stay on top of your spending.
								</p>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<GitGraph className="h-10 w-10 text-primary" />
								<h3 className="text-xl font-bold">Expense Tracking</h3>
								<p className="text-muted-foreground">
									Easily categorize and monitor your expenses to identify areas for improvement.
								</p>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<Wallet className="h-10 w-10 text-primary" />
								<h3 className="text-xl font-bold">Savings Goals</h3>
								<p className="text-muted-foreground">
									Set and track your savings goals to stay motivated and achieve your financial dreams.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 justify-center flex">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Hear from our satisfied customers about how our finance app has helped them achieve their financial
									goals.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<img
									src="/placeholder.svg"
									width="80"
									height="80"
									alt="Avatar"
									className="rounded-full"
									style={{ aspectRatio: "80/80", objectFit: "cover" }}
								/>
								<blockquote className="max-w-[400px]">
									<p className="text-muted-foreground">
										"This finance app has been a game-changer for me. It's\n helped me stay on top of my expenses and
										reach my savings\n goals."
									</p>
									<cite className="mt-4 block text-sm font-medium not-italic text-primary">
										- Sarah, Small Business Owner
									</cite>
								</blockquote>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<img
									src="/placeholder.svg"
									width="80"
									height="80"
									alt="Avatar"
									className="rounded-full"
									style={{ aspectRatio: "80/80", objectFit: "cover" }}
								/>
								<blockquote className="max-w-[400px]">
									<p className="text-muted-foreground">
										"I've been using this finance app for a year now, and it's\n made managing my money so much easier.
										Highly recommend!"
									</p>
									<cite className="mt-4 block text-sm font-medium not-italic text-primary">
										- Michael, Freelance Designer
									</cite>
								</blockquote>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground">&copy; 2024 Fintech App. All rights reserved.</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
						Terms of Service
					</Link>
					<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}