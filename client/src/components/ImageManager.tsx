import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Download, Copy, Check } from 'lucide-react';

interface ImageManagerProps {
  onImageAdd?: (imagePath: string) => void;
}

export default function ImageManager({ onImageAdd }: ImageManagerProps) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedPath, setCopiedPath] = useState('');

  // List of available local images
  const localImages = [
    { name: 'Hero Image', path: '/assets/hero-image.png' },
    { name: 'GLB Logo (Main)', path: '/assets/glb-logo.png' },
    { name: 'Logo', path: '/assets/logo.png' },
    { name: 'Logo SVG', path: '/assets/logo.svg' },
    { name: 'Favicon', path: '/assets/favicon.png' },
    { name: 'Josefina', path: '/assets/josefina.png' },
    { name: 'Leader 1', path: '/assets/leader1.png' },
    { name: 'Leader 2', path: '/assets/leader2.png' },
    { name: 'Leader 3', path: '/assets/leader3.png' },
    { name: 'Giving Circles', path: '/assets/downloaded/giving-circles.jpg' },
    { name: 'Mentorship Leadership', path: '/assets/downloaded/mentorship-leadership.jpg' },
    { name: 'Advocacy', path: '/assets/downloaded/advocacy.jpg' },
    { name: 'Natalie Willson', path: '/assets/downloaded/natalie-willson.jpg' },
    { name: 'Women Leadership', path: '/assets/downloaded/women-leadership.jpg' },
    { name: 'Women Mentoring', path: '/assets/downloaded/women-mentoring.jpg' },
    { name: 'Women Empowerment', path: '/assets/downloaded/women-empowerment.jpg' },
    { name: 'Women Networking', path: '/assets/downloaded/women-networking.jpg' },
    { name: 'Women Supporting', path: '/assets/downloaded/women-supporting.jpg' },
  ];

  const handleDownloadImage = async () => {
    if (!imageUrl || !imageName) return;
    
    setIsDownloading(true);
    try {
      // This would need to be implemented with a backend endpoint
      // For now, just show instructions
      alert(`To download this image:
1. Right-click and save the image from: ${imageUrl}
2. Save it as: ${imageName}
3. Place it in: client/public/assets/downloaded/
4. Use path: /assets/downloaded/${imageName}`);
      
      const newPath = `/assets/downloaded/${imageName}`;
      if (onImageAdd) {
        onImageAdd(newPath);
      }
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(''), 2000);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-serif font-normal">Image Manager</h2>
        <p className="text-muted-foreground">
          Manage local images and add new ones to your project
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add New Image Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Add New Image</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Image URL (e.g., https://images.unsplash.com/...)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Input
              placeholder="File name (e.g., new-image.jpg)"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleDownloadImage}
            disabled={!imageUrl || !imageName || isDownloading}
            className="w-full md:w-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            {isDownloading ? 'Processing...' : 'Get Download Instructions'}
          </Button>
        </div>

        {/* Available Images Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Available Local Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {localImages.map((image) => (
              <div
                key={image.path}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{image.name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {image.path}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(image.path)}
                  className="ml-2 flex-shrink-0"
                >
                  {copiedPath === image.path ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Add Instructions */}
        <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">Quick Add Local Images:</h4>
          <ol className="text-sm text-muted-foreground space-y-1">
            <li>1. Copy your image files to: <code>client/public/assets/downloaded/</code></li>
            <li>2. Refresh this page to see new images</li>
            <li>3. Click copy button to get the path</li>
            <li>4. Use in components: <code>&lt;img src="/assets/downloaded/filename.jpg" /&gt;</code></li>
            <li>5. Run <code>npm run build</code> after changes</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}