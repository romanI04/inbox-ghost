import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Today's Auto‑Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="data-placeholder" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="data-placeholder" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inbox Digest</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="data-placeholder" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
