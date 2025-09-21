import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileText, 
  Users, 
  BarChart3, 
  Download, 
  Eye, 
  Trash2,
  Search,
  Filter,
  PlusCircle,
  UserCheck,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";

interface Resume {
  id: string;
  candidateName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  skills: string[];
  matchScore: number;
  status: "pending" | "reviewed" | "shortlisted" | "rejected";
  uploadDate: string;
}

const mockResumes: Resume[] = [
  {
    id: "1",
    candidateName: "Amit Sharma",
    email: "amit.sharma@email.com",
    phone: "+91-9876543210",
    position: "Data Scientist",
    experience: "3 years",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    matchScore: 92,
    status: "shortlisted",
    uploadDate: "2024-01-15"
  },
  {
    id: "2",
    candidateName: "Priya Reddy",
    email: "priya.reddy@email.com", 
    phone: "+91-9876543211",
    position: "Full Stack Developer",
    experience: "2 years",
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    matchScore: 88,
    status: "reviewed",
    uploadDate: "2024-01-14"
  },
  {
    id: "3",
    candidateName: "Raj Kumar",
    email: "raj.kumar@email.com",
    phone: "+91-9876543212", 
    position: "Cybersecurity Analyst",
    experience: "4 years",
    skills: ["Penetration Testing", "Network Security", "Python", "Kali Linux"],
    matchScore: 95,
    status: "shortlisted",
    uploadDate: "2024-01-13"
  }
];

const HRAdminPanel = () => {
  const [resumes, setResumes] = useState<Resume[]>(mockResumes);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredResumes = resumes.filter(resume => {
    const matchesSearch = resume.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || resume.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleBulkUpload = () => {
    toast({
      title: "Bulk Upload",
      description: "Resume upload feature would be integrated here with file processing.",
      duration: 3000,
    });
    setIsUploadDialogOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shortlisted": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "reviewed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "rejected": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 dark:text-green-400";
    if (score >= 80) return "text-blue-600 dark:text-blue-400";
    if (score >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="min-h-screen bg-accent/20 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">HR Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage resume submissions and candidate evaluations</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Resumes</p>
                <p className="text-3xl font-bold text-primary">{resumes.length}</p>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Shortlisted</p>
                <p className="text-3xl font-bold text-green-600">
                  {resumes.filter(r => r.status === "shortlisted").length}
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Match Score</p>
                <p className="text-3xl font-bold text-blue-600">
                  {Math.round(resumes.reduce((acc, r) => acc + r.matchScore, 0) / resumes.length)}%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {resumes.filter(r => r.status === "pending").length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>
        </div>

        <Tabs defaultValue="resumes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resumes">Resume Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="resumes" className="space-y-6">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-1 gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search candidates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              
              <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero">
                    <Upload className="w-4 h-4 mr-2" />
                    Bulk Upload Resumes
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Bulk Upload Resumes</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Drag & drop files here</p>
                      <p className="text-sm text-muted-foreground">or click to browse</p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                    <Button onClick={handleBulkUpload} className="w-full">
                      Upload Resumes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Resume List */}
            <div className="space-y-4">
              {filteredResumes.map((resume) => (
                <Card key={resume.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{resume.candidateName}</h3>
                        <Badge className={getStatusColor(resume.status)} variant="secondary">
                          {resume.status}
                        </Badge>
                        <div className={`text-sm font-bold ${getMatchScoreColor(resume.matchScore)}`}>
                          {resume.matchScore}% Match
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                        <p>{resume.email}</p>
                        <p>{resume.position}</p>
                        <p>{resume.experience} experience</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resume.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Resume Status Distribution</h3>
                <div className="space-y-3">
                  {["pending", "reviewed", "shortlisted", "rejected"].map(status => (
                    <div key={status} className="flex items-center justify-between">
                      <span className="capitalize">{status}</span>
                      <span className="font-medium">
                        {resumes.filter(r => r.status === status).length}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Top Skills Demand</h3>
                <div className="space-y-3">
                  {["Python", "JavaScript", "React", "Machine Learning", "SQL"].map(skill => (
                    <div key={skill} className="flex items-center justify-between">
                      <span>{skill}</span>
                      <span className="font-medium">
                        {resumes.filter(r => r.skills.includes(skill)).length}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">System Settings</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="threshold">Minimum Match Score Threshold</Label>
                  <Input id="threshold" type="number" defaultValue="75" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="auto-reject">Auto-reject below threshold</Label>
                  <input type="checkbox" id="auto-reject" className="ml-2" />
                </div>
                <Button>Save Settings</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HRAdminPanel;